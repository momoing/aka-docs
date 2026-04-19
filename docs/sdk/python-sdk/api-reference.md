---
id: api-reference
title: Python SDK API Reference
sidebar_label: API Reference
sidebar_position: 2
description: Full reference for the akaBot Python SDK.
---

# Python SDK API Reference

## AkaBotClient

```python
AkaBotClient(url: str, token: str, timeout: int = 30)
```

### Properties

| Property | Type | Description |
|---|---|---|
| `jobs` | `JobsClient` | Manage and monitor jobs |
| `processes` | `ProcessesClient` | List and inspect processes |
| `agents` | `AgentsClient` | Query agent status |
| `queues` | `QueuesClient` | Add/retrieve queue items |
