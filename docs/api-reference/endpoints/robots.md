---
id: robots
title: Robots API
sidebar_label: Robots
sidebar_position: 1
description: REST API endpoints for managing robots in akaBot.
---

# Robots API

## List Robots

```http
GET /api/v1/robots
```

Returns a paginated list of all robots.

## Get robots by ID

```http
GET /api/v1/robots/{id}
```

## Create robots

```http
POST /api/v1/robots
Content-Type: application/json
```

## Delete robots

```http
DELETE /api/v1/robots/{id}
```
