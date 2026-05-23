---
title: "Serverless Architecture Pitfalls: Alibaba Cloud API Gateway Body Transform Issue"
description: "When implementing Alipay webhook callbacks, we encountered an issue where application/x-www-form-urlencoded request bodies were being converted to JSON objects. This article analyzes the problem chain, platform behavior, and solutions."
head:
  - - meta
    - name: keywords
      content: Serverless, API Gateway, Alibaba Cloud, Body Transform, Alipay callback, webhook, Function Compute
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/serverless-api-gateway-body-transform
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/serverless-api-gateway-body-transform
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/serverless-api-gateway-body-transform
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/serverless-api-gateway-body-transform
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Serverless Architecture Pitfalls: Alibaba Cloud API Gateway Body Transform Issue",
        "description": "When implementing Alipay webhook callbacks, we encountered an issue where application/x-www-form-urlencoded request bodies were being converted to JSON objects. This article analyzes the problem chain, platform behavior, and solutions.",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2026-04-15",
        "dateModified": "2026-04-15",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/serverless-api-gateway-body-transform"
        }
      }
---

# Serverless Architecture Pitfalls: Alibaba Cloud API Gateway Body Transform Issue

> Background: When implementing Alipay webhook callbacks, we encountered an issue where `application/x-www-form-urlencoded` request bodies were being converted to JSON objects. This article analyzes the problem chain, platform behavior, and solutions.

## Architecture Overview: ServerlessInsight Full-Stack Serverless

![ServerlessInsight Architecture](/serverless/serverlessinsight-architecture.png)

Before diving into the details, here is the project architecture—a classic Serverless API setup designed for zero-ops, auto-scaling, and low-cost operation.

We use two open-source frameworks to build this Serverless application:

1. **[ServerlessInsight](https://serverlessinsight.com/)**: The **configuration and orchestration layer**. It manages cloud resources (functions, triggers, API Gateway routes) and includes Alibaba Cloud adaptation logic, defaulting to `PASSTHROUGH` mode for API Gateway configuration to achieve zero-config development experience.
   - **Automated resource management**: No need to manually create functions, configure triggers, or bind domains in the cloud console. ServerlessInsight defines everything through code and automatically orchestrates and manages cloud resources (FC instances, API Gateway routes, permission policies, etc.).
   - **Multi-cloud adaptation strategy**: To adapt to Alibaba Cloud, Tencent Cloud, AWS, and other cloud providers, ServerlessInsight uses a "greatest common divisor" strategy when designing API Gateway configurations, defaulting to **`PASSTHROUGH`** mode.

2. [**serverless-adapter**](https://github.com/geek-fun/serverless-adapter): The **runtime adaptation layer**. It sits between Function Compute (FC) and business frameworks (like Express/Koa), converting heterogeneous cloud vendor `event` objects into standard HTTP request objects (`req`), enabling developers to write Serverless code like traditional web applications.

The interaction between these frameworks and Alibaba Cloud's platform mechanism triggered the issue we're discussing today.

---

## The Problem: API Configuration Doesn't Match Expectations

To understand the issue more intuitively, let's look at the specific **API interface configuration scenario** and how **request parameters** flow through the chain.

![Alipay Webhook Request Flow](/serverless/alipay-webhook-architecture.png)

In real business scenarios, we typically deploy a payment callback handler through ServerlessInsight.

- **Client (e.g., Alipay)**
  - **Method**: `POST`
  - **Header**: `Content-Type: application/x-www-form-urlencoded`
  - **Body**: Standard key-value pair string

- **Server (Alibaba Cloud)**
  - **API Gateway Config**: Default `RequestMode: PASSTHROUGH`
  - **Backend**: Function Compute running Node.js (Express) code

Logically, `PASSTHROUGH` mode should transparently pass original parameters to the backend. But when handling `x-www-form-urlencoded` data, the chain behaved unexpectedly.

### Expected Behavior

Alipay callbacks use `application/x-www-form-urlencoded` format:

```http
POST /api/v1/webhooks/alipay HTTP/1.1
Content-Type: application/x-www-form-urlencoded

notify_time=2024-01-01+12:00:00&notify_type=trade_status_sync&sign_type=RSA2&sign=xxx&...
```

### Actual Behavior

In Function Compute, `event.body` was already a JSON object:

```javascript
// event.body value
{
  "notify_time": "2024-01-01 12:00:00",
  "notify_type": "trade_status_sync",
  "sign_type": "RSA2",
  "sign": "xxx",
  // ...
}
```

This caused signature verification to fail, since the signature was calculated based on the original urlencoded string.

---

## Deep Analysis: Why Did Body Become an Object?

To solve this, we need to dive into the code level and understand the interaction logic between `serverless-adapter` and API Gateway.

### RequestMode Types

According to Alibaba Cloud documentation, API Gateway supports three request parameter modes:

| Mode | Chinese Name | Behavior |
|------|----------|----------|
| `MAPPING` (filter unknown params) | Parameter mapping (filter unknown) | Query, Path, Body Form params require frontend-backend mapping config, gateway only passes configured params |
| `MAPPING` (pass unknown params) | Parameter mapping (pass unknown) | Besides configured params, other params are passed transparently |
| `PASSTHROUGH` | Transparent pass | No need to configure Query, Body Form params, all client params are passed to backend |

### Alibaba Cloud API Gateway's "Fake Passthrough"

API Gateway's `PASSTHROUGH` mode defines "passthrough" as **parameter-level passthrough**, not **original request format passthrough**.

- **Mechanism**: To adapt to Function Compute (FC)'s JSON event structure, the gateway automatically parses `application/x-www-form-urlencoded` format when forwarding requests.
- **Result**: It breaks down `key=value&key=value` and assembles a JSON object assigned to `event.body`. The original string form is lost.

This design aims to improve compatibility and development experience for Function Compute backends across multiple languages through standardized event formats.

### serverless-adapter's Handling

`serverless-adapter`'s core logic is in the `requestBody` function, which handles different types of `event.body`:

```typescript
const requestBody = (event) => {
  if (typeof event.body === 'string') {
    // If it's a string, process directly
  } else if (typeof event.body === 'object') {
    // If it's an object (from API Gateway parsing)
    return Buffer.from(JSON.stringify(event.body)); // ⚠️ Problem point
  }
}
```

**Logic Conflict**:

- API Gateway thinks: I parsed the params into an object for you (FC), so you can use it more conveniently.
- serverless-adapter thinks: I received an object, to use it with Express framework, I need to serialize it back to a string.
- **Final Result**: Original `a=1&b=2` becomes `{"a":"1","b":"2"}`. For payment callbacks that rely heavily on original Body, this causes signature verification failure.

---

## Core Solution: Application Layer Compatibility

The core idea: since we can't change gateway behavior, write compatibility logic at the application layer to flexibly handle data already parsed by the gateway.

### Solution Advantages

- **Minimal changes**: No need to modify gateway config or introduce complex bypass solutions, only adjust at business code level.
- **Retain gateway capabilities**: Continue using API Gateway's powerful features like traffic control, authentication, monitoring.
- **High flexibility**: Can handle requests from different sources and formats—ideal for complex scenarios like third-party callbacks (payment, webhook).

### Implementation Strategy and Code Example

The key is to write a smart parsing adapter based on `Content-Type` and actual request body content:

```typescript
// src/controllers/webhook.ts
const parseBody = (
  raw: string | undefined,
  parsedBody: Record<string, string>
): Record<string, string> => {
  // Scenario 1: body is already a JSON object (API Gateway parsed)
  if (parsedBody && typeof parsedBody === 'object' && Object.keys(parsedBody).length > 1) {
    const hasSign = 'sign' in parsedBody;
    if (hasSign) {
      return parsedBody;  // Use the parsed object directly
    }
  }

  // Scenario 2: rawBody is a JSON string
  if (raw?.startsWith('{') || raw?.startsWith('[')) {
    try {
      return JSON.parse(raw);
    } catch {
      // Continue trying urlencoded parsing
    }
  }

  // Scenario 3: rawBody is a urlencoded string
  return parseUrlencoded(raw ?? '');
};
```

---

## Alternative Solutions

Two other solutions have different focuses and can serve as alternatives or optimization ideas for specific scenarios.

### Option 2: Enhance serverless-adapter (Advanced)

This is a deeper framework-level modification.

- **Core Logic**: Modify the Serverless framework adapter to add special logic when converting events to standard `req` objects. For example, when `Content-Type` is `application/x-www-form-urlencoded`, instead of simply `JSON.stringify` the object, reassemble it into `key=value&` format string.
- **Challenge**: Complex implementation, need to handle object property order, special character encoding, etc., to ensure the reassembled string exactly matches the client's original string (critical for signature verification).

### Option 3: Use HTTP Trigger (Bypass)

This is an architecture-level bypass solution.

- **Advantage**: Can 100% get original HTTP request body and headers, completely bypassing API Gateway preprocessing.
- **Disadvantage**: Lose API Gateway's enterprise features like unified domain management, request rate limiting, IP whitelist/blacklist, log auditing, potentially increasing application's own security and operations burden.

---

## Architecture Decision Guide

In Serverless development, choosing the right solution requires weighing pros and cons. This table can help you decide:

| Scenario | Recommended Solution | Reason |
|------|----------|------|
| **General RESTful API** | Default config | For most JSON interfaces, gateway's default passthrough or parsing behavior is sufficient, best development experience |
| **Payment callback / Webhook** | **Application layer compatibility** | **Most recommended**. Leverage gateway capabilities while handling special needs like signature verification through flexible code logic |
| **Simple service needing original Body** | HTTP Trigger | If service is very simple, strongly depends on original request, and doesn't need gateway features, this is most direct |

In summary, **application layer compatibility handling** is the best practice for dealing with API Gateway Body preprocessing issues. It embodies the pragmatic thinking in distributed systems: adding application layer intelligence to adapt to infrastructure layer constraints.