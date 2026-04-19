---
id: create-activity
title: Create a Custom Activity
sidebar_label: Create Activity
sidebar_position: 1
description: How to build a custom activity for akaBot Studio using the .NET SDK.
---

# Create a Custom Activity

## 1. Create a .NET Class Library

```bash
dotnet new classlib -n MyActivities
cd MyActivities
dotnet add package akaBot.Activities.SDK
```

## 2. Implement the Activity

```csharp
using akaBot.Activities.SDK;
using System.Activities;

[Activity(DisplayName = "Send Slack Message", Category = "Integrations")]
public class SendSlackMessage : CodeActivity
{
    [Input("Webhook URL")]
    public InArgument<string> WebhookUrl { get; set; }

    [Input("Message")]
    public InArgument<string> Message { get; set; }

    protected override void Execute(CodeActivityContext context)
    {
        // implementation
    }
}
```

## 3. Build and Package

```bash
dotnet pack -c Release
```

The resulting `.nupkg` file can be [published to akaBot Studio](./publish-activity).
