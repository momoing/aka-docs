---
id: authentication
title: Authentication
sidebar_label: Authentication
sidebar_position: 2
description: How to authenticate with the akaBot API.
---

# Authentication

The akaBot API uses **Bearer token** authentication.

## Obtain a Token

```bash
POST /api/v1/auth/token
Content-Type: application/json

{
  "username": "your-username",
  "password": "your-password"
}
```

Response:
```json
{
  "access_token": "eyJhbGci...",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

## Use the Token

Include the token in the `Authorization` header for all API requests:

```bash
Authorization: Bearer eyJhbGci...
```
