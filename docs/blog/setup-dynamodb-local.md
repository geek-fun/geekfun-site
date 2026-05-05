---
title: How to Set Up DynamoDB Local for Local Development
description: Learn how to set up DynamoDB Local with Docker or the downloadable JAR, configure AWS CLI access, create your first table, and connect local DynamoDB to DocKit.
head:
  - - meta
    - name: keywords
      content: DynamoDB Local setup, run DynamoDB locally, DynamoDB Local Docker, DynamoDB Local JAR, AWS CLI DynamoDB Local, DocKit DynamoDB Local
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/setup-dynamodb-local
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/setup-dynamodb-local
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How to Set Up DynamoDB Local for Local Development",
        "description": "Learn how to set up DynamoDB Local with Docker or the downloadable JAR, configure AWS CLI access, create your first table, and connect local DynamoDB to DocKit.",
        "image": "https://www.geekfun.club/dockit-connection-dynamodblocal.png",
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
        "datePublished": "2026-04-23",
        "dateModified": "2026-04-23",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/setup-dynamodb-local"
        },
        "keywords": ["DynamoDB Local", "Docker", "AWS CLI", "DocKit"],
        "articleSection": "Database Development"
      }
---

# How to Set Up DynamoDB Local for Local Development

It's common to spin up a local development stack that mirrors your cloud environment — developers can verify changes instantly with minimal impact. For stacks that use DynamoDB, **DynamoDB Local** is the fastest way to get started. It gives you a local endpoint that behaves like DynamoDB for everyday development tasks such as table creation, item writes, PartiQL experiments, and integration tests.

This guide focuses only on **setup**. If you want to query and manage local tables with a GUI afterward, see **[Access and Manage Local DynamoDB with DocKit](/blog/query-dynamodb-locally)**.

![DocKit DynamoDB Local connection screen](/dockit-connection-dynamodblocal.png)

## What You Need Before Starting

Pick one setup path:

- **[Docker with dynamodb-local image](https://hub.docker.com/r/amazon/dynamodb-local)** — easiest for most developers
- **[Downloadable JAR](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)** — useful if you do not want Docker

You may also want:

- **[AWS CLI](https://aws.amazon.com/cli/)** for creating and listing tables from the terminal
- **[DocKit](/products/dockit/)** if you want a desktop GUI for local DynamoDB

> AWS currently recommends **DynamoDB Local v3.x** for local development, and the downloadable versions require **Java 17 or newer** for recent releases.


## Option 1: Run DynamoDB Local with Docker

This is the simplest setup for most teams.

### Start the container

```bash
docker run -d \
  --name dynamodb-local \
  -p 8000:8000 \
  amazon/dynamodb-local:latest
```

This starts DynamoDB Local on:

```text
http://localhost:8000
```

### Check that it is running

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

If everything is working, you should get a valid JSON response.

### Persist data with Docker Compose

If you want your local tables to survive container restarts, mount a local directory and use `-sharedDb -dbPath ./data`.

```yaml
services:
  dynamodb-local:
    command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"
    image: "amazon/dynamodb-local:latest"
    container_name: dynamodb-local
    ports:
      - "8000:8000"
    volumes:
      - "./docker/dynamodb:/home/dynamodblocal/data"
    working_dir: /home/dynamodblocal
```

Then start it with:

```bash
docker compose up -d
```

---

## Option 2: Run DynamoDB Local with the Downloadable JAR

If you prefer not to use Docker, you can download the JAR and run the server on your machine.

### Download and extract

```bash
mkdir -p ~/dynamodb-local
cd ~/dynamodb-local

curl -L -o dynamodb_local_latest.tar.gz \
  https://d1ni2b6xgvw0s0.cloudfront.net/v2.x/dynamodb_local_latest.tar.gz

tar -xzf dynamodb_local_latest.tar.gz
```

### Start DynamoDB Local

```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb
```

By default, DynamoDB Local listens on port `8000`. If you need another port:

```bash
java -Djava.library.path=./DynamoDBLocal_lib \
  -jar DynamoDBLocal.jar \
  -sharedDb \
  -port 8001
```

If you want to see all runtime options:

```bash
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -help
```


## Configure AWS CLI for DynamoDB Local

After a DynamoDB server runs on your local machine, you will need some tools to access it. You can use either the AWS CLI or DocKit. Even though DynamoDB Local does **not** require real AWS credentials, the AWS CLI still expects credentials and a region to be configured.

Use any placeholder values:

```bash
aws configure
```

Example values:

```text
AWS Access Key ID: fakeMyKeyId
AWS Secret Access Key: fakeSecretAccessKey
Default region name: us-east-1
Default output format: json
```

For every local command, remember to pass:

```bash
--endpoint-url http://localhost:8000
```

## Create Your First Local Table

Once the local server is running, create a simple table.

```bash
aws dynamodb create-table \
  --table-name Users \
  --attribute-definitions AttributeName=userId,AttributeType=S \
  --key-schema AttributeName=userId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --endpoint-url http://localhost:8000
```

Then confirm it exists:

```bash
# list tables
aws dynamodb list-tables --endpoint-url http://localhost:8000 
# Describe specified table
aws dynamodb describe-table \
  --table-name Users \
  --endpoint-url http://localhost:8000 

```

## Connect DynamoDB Local from DocKit
Instead of using the AWS CLI with complex commands and flags, DocKit provides a user-friendly interactive UI to access your local DynamoDB. You can browse tables, run PartiQL, and inspect data locally. For the full workflow, see **[Access and Manage Local DynamoDB with DocKit](/blog/query-dynamodb-locally)**.



## Tips & Troubleshooting

**Always use `--endpoint-url`** — without it, CLI commands hit real AWS instead of your local instance.

**Fake credentials are fine** — DynamoDB Local accepts any value. Run `aws configure` with placeholders if the CLI complains.

**Port 8000 already in use?** Start on a different port:
```bash
docker run -d --name dynamodb-local -p 8001:8000 amazon/dynamodb-local:latest
```

**Use `-sharedDb`** to store everything in a single database file instead of separate files per credential/region.

**Data doesn't survive a restart by default** — mount a volume and pass `-dbPath ./data` to persist across sessions.

**Set a region** — even locally, most SDKs and the CLI expect something. `us-east-1` works fine.

**Prefer a GUI?** Use **[DocKit](/products/dockit/)** to browse tables, run PartiQL, and inspect data visually. Point it at `http://localhost:8000` — same as the CLI.

## Learn More

- **[Access and Manage Local DynamoDB with DocKit](/blog/query-dynamodb-locally)**
- **[Managing your DynamoDB tables with DocKit make life easier](/blog/dynamodb-gui-client)**
- **[Download DocKit](/download)**

*Last updated: April 2026*
