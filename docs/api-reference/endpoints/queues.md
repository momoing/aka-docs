---
id: queues
title: Queues API
sidebar_label: Queues
sidebar_position: 1
description: REST API endpoints for managing queues in akaBot.
---

# Queues API

## List Queues

```http
GET /api/v1/queues
```

Returns a paginated list of all queues.

## Get queues by ID

```http
GET /api/v1/queues/{id}
```

## Create queues

```http
POST /api/v1/queues
Content-Type: application/json
```

## Delete queues

```http
DELETE /api/v1/queues/{id}
```
