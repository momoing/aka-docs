---
id: getting-started
title: Python SDK Getting Started
sidebar_label: Getting Started
sidebar_position: 1
description: Set up the akaBot Python SDK.
---

# Python SDK Getting Started

## Install

```bash
pip install akabot-sdk
```

## Initialize Client

```python
from akabot import AkaBotClient

client = AkaBotClient(
    url="https://your-center",
    token="your-api-token"
)
```

## Start a Job

```python
job = client.jobs.create(
    process_name="MyProcess",
    agent_name="MyAgent"
)
print(f"Job started: {job.id}")
```
