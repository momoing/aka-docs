---
id: overview
title: API Overview
sidebar_label: Overview
sidebar_position: 1
description: Introduction to the akaBot REST API.
---

# API Overview

The akaBot REST API allows you to programmatically control all aspects of your automation environment.

## Base URL

```
https://<your-akabot-center>/api/v1
```

## Response Format

All responses are JSON. Successful responses return HTTP `2xx` status codes. Errors return `4xx` or `5xx` with an [error object](./error-codes).

## Rate Limiting

API requests are limited to **1000 requests per minute** per API key. The `X-RateLimit-Remaining` header shows remaining quota.
