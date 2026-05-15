---
title: DynamoDB Query Patterns — PartiQL, Visual Builder, and When to Use Each
description: Practical DynamoDB query patterns using PartiQL and the visual query builder. Covers filter expressions, index queries, batch operations, and local development with DynamoDB Local.
head:
  - - meta
    - name: keywords
      content: dynamodb partiql, dynamodb query patterns, dynamodb filter expression, dynamodb local, dynamodb gsi query, dynamodb visual query builder, dynamodb batch operations, partiql examples
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dynamodb-gui
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DynamoDB Query Patterns — PartiQL, Visual Builder, and When to Use Each",
        "description": "Practical DynamoDB query patterns using PartiQL and the visual query builder. Covers filter expressions, index queries, batch operations, and DynamoDB Local.",
        "image": "https://www.geekfun.club/dockit-dynamodb-query-ui.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2025-03-04",
        "dateModified": "2026-05-15",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/dynamodb-gui"
        },
        "keywords": ["DynamoDB PartiQL", "DynamoDB query patterns", "DynamoDB filter expression", "DynamoDB Local"],
        "articleSection": "Database Tools"
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I use PartiQL instead of the visual query builder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use PartiQL when you need complex filter expressions, multi-statement queries, or want to save queries to version control. Use the visual builder for quick lookups by partition/sort key where you don't need to write the query syntax."
            }
          },
          {
            "@type": "Question",
            "name": "Does PartiQL support all DynamoDB operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PartiQL in DynamoDB supports SELECT, INSERT, UPDATE, and DELETE. It does not support all SQL features — JOINs, subqueries, and aggregation functions are not available. Use the DynamoDB SDK for operations PartiQL cannot express."
            }
          },
          {
            "@type": "Question",
            "name": "How do I query a GSI with PartiQL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use SELECT with the index hint: SELECT * FROM \"TableName\".\"IndexName\" WHERE gsi_partition_key = 'value'"
            }
          }
        ]
      }
---

# DynamoDB Query Patterns — PartiQL, Visual Builder, and When to Use Each

When you're working with DynamoDB, the real question isn't which GUI to install. It's which query mode gets you the answer fastest without hiding what the database is actually doing. For the tool overview and download, you can check the [DynamoDB GUI client page](/products/dockit/dynamodb-gui-client). This guide is about query technique.

## PartiQL vs visual query builder — the real difference

I think of PartiQL as the mode for repeatable work. If a query is going into my notes, a runbook, or a pull request comment, I write it as PartiQL. It's a durable statement. You can tweak it precisely and rerun the same logic later against local, staging, or production data.

The visual builder is better when the lookup is disposable. If you already know the partition key and just want to sanity check a row, filling a few fields is quicker than remembering the exact syntax. This is especially true when you're exploring a table you didn't design that has multiple GSIs or dozens of attributes.

Use PartiQL when the query logic matters. Use the visual builder when you just need the values.

## Basic table queries with PartiQL

Let's look at an `Orders` table with this shape:

- OrderId (partition key)
- CreatedAt (sort key)
- CustomerId
- Status
- Total

### Query by partition key

This is the common case when you know the exact item collection you want.

```sql
SELECT *
FROM "Orders"
WHERE "OrderId" = 'ORD#10001';
```

If OrderId is the partition key, DynamoDB handles this with a keyed query instead of a scan. That means predictable latency and lower read costs.

### Query by partition key and sort key condition

Once you have a composite primary key, PartiQL is a good fit for narrow range reads.

```sql
SELECT "OrderId", "CreatedAt", "Status", "Total"
FROM "Orders"
WHERE "OrderId" = 'ORD#10001'
  AND "CreatedAt" BETWEEN '2026-05-01T00:00:00Z' AND '2026-05-31T23:59:59Z';
```

This works well when the sort key is time based and you've modeled the item collection for event history or versioned records.

### Scan with a filter expression

Sometimes you inherit a legacy table where the access pattern was never modeled. PartiQL can still find the data.

```sql
SELECT *
FROM "Orders"
WHERE "Status" = 'PENDING'
  AND "Total" >= 500;
```

If Status and Total aren't part of a key, DynamoDB has to scan and then filter. It's fine for small tables or local development, but it's usually the wrong pattern for a hot production path. You're paying to read items that don't match.

## GSI queries

Global Secondary Index queries are where I see teams trip over PartiQL syntax most often. You can't query the GSI by sending a normal SELECT to the base table and hoping DynamoDB will infer the index. You have to name the index explicitly.

If `Orders` has a GSI named `CustomerId-CreatedAt-index` with `CustomerId` as the partition key and `CreatedAt` as the sort key, query it like this:

```sql
SELECT "OrderId", "CustomerId", "CreatedAt", "Status", "Total"
FROM "Orders"."CustomerId-CreatedAt-index"
WHERE "CustomerId" = 'CUST#42'
  AND "CreatedAt" >= '2026-05-01T00:00:00Z';
```

DynamoDB needs to know which storage path you intend to use. The index hint makes that explicit. If a query feels natural but performs badly, you probably wanted a GSI backed access pattern.

## Batch operations

PartiQL is great for maintenance: seeding data, fixing broken rows, or cleaning up after a failed integration test.

### Insert items

```sql
INSERT INTO "Orders" VALUE {
  'OrderId': 'ORD#10002',
  'CreatedAt': '2026-05-15T09:30:00Z',
  'CustomerId': 'CUST#42',
  'Status': 'PENDING',
  'Total': 149.99
};
```

### Update attributes

```sql
UPDATE "Orders"
SET "Status" = 'PAID', "Total" = 159.99
WHERE "OrderId" = 'ORD#10002'
  AND "CreatedAt" = '2026-05-15T09:30:00Z';
```

### Delete an item

```sql
DELETE FROM "Orders"
WHERE "OrderId" = 'ORD#10002'
  AND "CreatedAt" = '2026-05-15T09:30:00Z';
```

### Run multiple statements in one session

For maintenance, I usually queue related statements together.

```sql
INSERT INTO "Orders" VALUE {
  'OrderId': 'ORD#10003',
  'CreatedAt': '2026-05-15T10:00:00Z',
  'CustomerId': 'CUST#77',
  'Status': 'PENDING',
  'Total': 89.50
};

UPDATE "Orders"
SET "Status" = 'PROCESSING'
WHERE "OrderId" = 'ORD#10001'
  AND "CreatedAt" = '2026-05-15T08:00:00Z';

DELETE FROM "Orders"
WHERE "OrderId" = 'ORD#TEST-001'
  AND "CreatedAt" = '2026-05-14T00:00:00Z';
```

Keep the service limits in mind. `BatchWriteItem` is still capped at 25 items per request. The tool might chunk large imports for you, but that limit exists.

## Visual query builder for ad-hoc lookups

The visual builder is fast when you know the key and don't care about saving the statement. I also find it useful when I inherit a table with unfamiliar attribute names. The UI can surface valid fields before I write anything by hand.

One workflow I use often: set the partition key in the form, add a filter, and then inspect the generated PartiQL before running it.

```sql
SELECT *
FROM "Orders"
WHERE "OrderId" = 'ORD#10001'
  AND "CreatedAt" >= '2026-05-01T00:00:00Z'
  AND "Status" = 'PENDING';
```

It turns a quick click path into plain text you can save for later.

## DynamoDB Local development workflow

For local work, I treat DynamoDB Local as a disposable lab. Start it in Docker, point the client at `localhost:8000`, and seed only what you need.

Start DynamoDB Local:

```bash
docker run --rm -p 8000:8000 amazon/dynamodb-local
```

Create a local connection:

- Endpoint: `http://localhost:8000`
- Region: `us-east-1`
- Access Key ID: `local`
- Secret Access Key: `local`

Then create your table using the AWS CLI and use PartiQL to load test data.

```sql
INSERT INTO "Orders" VALUE {
  'OrderId': 'ORD#LOCAL-001',
  'CreatedAt': '2026-05-15T11:00:00Z',
  'CustomerId': 'CUST#LOCAL',
  'Status': 'PENDING',
  'Total': 42.00
};
```

Validate your query locally first.

```sql
SELECT *
FROM "Orders"
WHERE "OrderId" = 'ORD#LOCAL-001'
  AND "CreatedAt" BETWEEN '2026-05-15T11:00:00Z' AND '2026-05-15T11:10:00Z';
```

This keeps schema experiments and seed data local. You can iterate on index names and attribute casing without touching a shared AWS account.

## When the AI assistant earns its keep

The AI assistant is most useful when a query is conceptually simple but syntactically annoying. A nested predicate like "show pending orders over 100 where customer is VIP or the order was created in the last 24 hours" is a good example. The hard part is turning that into valid PartiQL without accidentally widening the scan.

It also helps when you want to translate an SDK expression. Converting a `QueryCommand` with its mess of `ExpressionAttributeNames` and `ExpressionAttributeValues` into readable PartiQL is tedious work that's easy to automate.

Finally, it helps with performance debugging. If a query is doing a full table scan, asking the assistant to explain which predicate isn't backed by a key is much faster than manually inspecting every index definition.

## Resources

- [DynamoDB GUI client — features and download](/products/dockit/dynamodb-gui-client)
- [DynamoDB PartiQL editor guide](/products/dockit/features/dynamodb-partiql)
- [DocKit vs Dynobase](/products/dockit/dockit-vs-dynobase)
- [Connect to DynamoDB](/docs/dockit/connect-to-server)
- [GitHub](https://github.com/geek-fun/dockit)
