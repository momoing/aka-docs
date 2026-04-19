---
id: upgrade-guide
title: Upgrade Guide
sidebar_label: Upgrade Guide
sidebar_position: 5
description: How to upgrade akaBot Center and agents to a new version.
---

# Upgrade Guide

:::warning
Always back up your database before upgrading.
:::

## Upgrade akaBot Center

1. Stop the akaBot Center service
2. Back up the database
3. Run the new installer — it detects the existing installation and upgrades in place
4. Verify by checking **Settings → About** for the new version number

## Upgrade Agents

Agents can be upgraded remotely from akaBot Center:
1. Go to **Agents** → select agents to upgrade
2. Click **Update Agent** → confirm
3. Agents download and apply the update automatically
