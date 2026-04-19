---
id: getting-started
title: .NET SDK Getting Started
sidebar_label: Getting Started
sidebar_position: 1
description: Set up the akaBot .NET SDK in your C# project.
---

# .NET SDK Getting Started

## Install

```bash
dotnet add package akaBot.SDK
```

## Initialize Client

```csharp
using akaBot.SDK;

var client = new AkaBotClient(new AkaBotClientOptions
{
    BaseUrl = "https://your-center",
    ApiKey  = "your-api-key"
});
```

## List Processes

```csharp
var processes = await client.Processes.ListAsync();
foreach (var p in processes)
    Console.WriteLine(p.Name);
```
