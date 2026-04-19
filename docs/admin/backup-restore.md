---
id: backup-restore
title: Backup & Restore
sidebar_label: Backup & Restore
sidebar_position: 5
description: How to back up and restore akaBot Center data.
---

# Backup & Restore

## What to Back Up

- **Database** — all process definitions, job history, user data
- **File storage** — uploaded packages and assets (`/var/akabot/storage`)
- **Configuration** — `appsettings.json` / environment variables

## Database Backup

```bash
# SQL Server
sqlcmd -S localhost -Q "BACKUP DATABASE [AkaBotCenter] TO DISK='backup.bak'"

# PostgreSQL
pg_dump -U akabot akabotcenter > backup.sql
```

## Restore

```bash
# PostgreSQL
psql -U akabot akabotcenter < backup.sql
```
