# Multi-Agent

PowerMem supports multiple agents sharing and isolating memory.

## Scope Levels

| Scope | Visibility | Use case |
|-------|-----------|----------|
| **Private** | Single agent only | Agent-specific notes, draft thoughts |
| **Shared** | Agent group | Team knowledge, project context |
| **Public** | All agents | Global facts, shared preferences |

## Agent Groups

```python
memory = Memory(config, agent_id="agent-1", agent_group="team-alpha")

# This memory is visible to all agents in team-alpha
memory.add("Sprint goal: finish auth module", scope="shared", user_id="alice")

# This memory is private to agent-1
memory.add("My internal reasoning chain", scope="private", user_id="alice")
```

## User Groups

Separate memory per user, even when multiple agents serve them:

```python
# Agent 1 stores for user alice
memory.add("Alice prefers Python", user_id="alice")

# Agent 2 retrieves for user alice — sees the same memory
results = memory.search("user preferences", user_id="alice")
```

## Cross-Agent Collaboration

Agent A can write a skill that Agent B discovers and uses:

```python
# Agent A (DevOps specialist)
agent_a_memory.add_skill("Deploy: VPN → health check → blue-green", user_id="shared-team")

# Agent B (general assistant) retrieves it
results = agent_b_memory.search_skills("deployment", user_id="shared-team")
```

## Isolation Guarantees

- Private memories never leak across agents
- Shared memories respect group boundaries
- User memories are always scoped by `user_id`
- Audit log tracks all cross-boundary reads
