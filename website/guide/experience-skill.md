# Experience & Skill Distillation

PowerMem's two-layer distillation system lets agents **learn** from interactions, not just recall facts.

## Two Layers

### Experience Layer
Episodic memories — what happened, in what context, with what outcome.

```python
memory.add_experience(
    "Deploying to prod-X failed because VPN wasn't connected first. "
    "Had to reconnect VPN then retry.",
    user_id="alice"
)
```

### Skill Layer
Procedural knowledge — how to do things, distilled from experiences.

```python
memory.add_skill(
    "Zero-downtime deployment: 1) Connect VPN 2) Run health check "
    "3) Deploy with blue-green 4) Verify metrics 5) Cut traffic",
    user_id="alice"
)
```

## Distillation Process

```
Experiences ──→ Pattern Detection ──→ Skill Extraction ──→ Skill Store
     ↑                                                      │
     └──────────── Feedback Loop ───────────────────────────┘
```

1. **Collect** — experiences accumulate over time
2. **Pattern** — LLM identifies recurring patterns across experiences
3. **Distill** — patterns are converted into actionable skills
4. **Apply** — skills inform future decisions
5. **Feedback** — outcomes refine skills

## Batch Distillation

Process all accumulated experiences at once:

```python
memory.distill_all()
```

This runs the LLM over all experience memories and extracts new skills or updates existing ones.

## When to Use

| Scenario | Layer |
|----------|-------|
| "User prefers dark mode" | Fact (regular memory) |
| "Last deploy failed due to missing VPN" | Experience |
| "Deployment checklist: VPN → health check → deploy" | Skill |
| "How to configure OceanBase clustering" | Skill |

## Search Across Layers

```python
# Search experiences
results = memory.search_experiences("deployment issues", user_id="alice")

# Search skills
results = memory.search_skills("deployment", user_id="alice")

# Search all (default)
results = memory.search("deployment", user_id="alice")
```
