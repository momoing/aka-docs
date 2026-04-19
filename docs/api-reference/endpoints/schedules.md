---
id: schedules
title: Schedules API
sidebar_label: Schedules
sidebar_position: 1
description: REST API endpoints for managing schedules in akaBot.
---

# Schedules API

## List Schedules

```http
GET /api/v1/schedules
```

Returns a paginated list of all schedules.

## Get schedules by ID

```http
GET /api/v1/schedules/{id}
```

## Create schedules

```http
POST /api/v1/schedules
Content-Type: application/json
```

## Delete schedules

```http
DELETE /api/v1/schedules/{id}
```
