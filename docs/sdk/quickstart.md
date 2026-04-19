---
id: quickstart
title: SDK Quickstart
sidebar_label: Quickstart
sidebar_position: 2
description: Get up and running with the akaBot SDK in 5 minutes.
---

# SDK Quickstart

## .NET Quickstart

```bash
dotnet add package akaBot.Activities.SDK
```

```csharp
using akaBot.Activities.SDK;

[Activity(DisplayName = "Hello World")]
public class HelloWorldActivity : CodeActivity
{
    [Input("Name")]
    public InArgument<string> Name { get; set; }

    protected override void Execute(CodeActivityContext context)
    {
        Console.WriteLine($"Hello, {Name.Get(context)}!");
    }
}
```

## Python Quickstart

```bash
pip install akabot-sdk
```

```python
from akabot import AkaBotClient

client = AkaBotClient(url="https://your-center", token="your-token")
jobs = client.jobs.list()
```
