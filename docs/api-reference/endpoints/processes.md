---
id: processes
title: Processes API
sidebar_label: Processes
sidebar_position: 1
description: REST API endpoints for managing processes in akaBot.
---

# Processes API

## List Processes

```http
GET /api/v1/processes
```

Returns a paginated list of all processes.

## Get processes by ID

```http
GET /api/v1/processes/{id}
```

## Create processes

```http
POST /api/v1/processes
Content-Type: application/json
```

## Delete processes

```http
DELETE /api/v1/processes/{id}
```
