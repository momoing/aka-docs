---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 6
description: Common issues and solutions for akaBot administrators.
---

# Troubleshooting

## Agent Shows "Disconnected"

**Cause**: Network connectivity issue or service not running.

**Resolution**:
1. Verify the agent service is running: `Get-Service akaBotAgent`
2. Check the agent can reach akaBot Center: `Test-NetConnection <center-host> -Port 443`
3. Review agent logs at `C:\ProgramData\akaBot\Agent\Logs`

## Job Stuck in "Pending"

**Cause**: No available agent assigned to the job's folder.

**Resolution**: Ensure at least one agent is **Available** and assigned to the target folder.

## License Validation Failed

**Cause**: The machine fingerprint changed (e.g., after a hardware change or VM migration).

**Resolution**: Re-activate the license via **Settings → License → Re-activate**.
