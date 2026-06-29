# Memory Lifecycle

PowerMem manages the complete lifecycle of memories — they're not static note dumps.

## 1. Extraction

When input arrives (conversation, action, feedback), an LLM extracts structured memories:

```
Input: "I just deployed the auth service to prod and it crashed because 
        the DB migration wasn't applied first."

Extracted:
  - Fact: "Auth service is deployed to production"
  - Experience: "Deploying auth service without DB migration first causes crash"
  - Entity: "auth service" (type: service)
```

## 2. Update & Merge

New memories are compared against existing ones. Similar memories are merged:

```
Existing: "User prefers dark mode"
New:      "User likes dark theme in IDEs"
Merged:   "User prefers dark mode/theme in all IDEs"
```

This prevents memory bloat and keeps information consolidated.

## 3. Reinforcement

Each time a memory is successfully retrieved and used, its **strength (S)** increases:

```python
S_new = S_old + reinforcement_factor  # default: +0.1 per retrieval
```

Stronger memories decay more slowly and rank higher in search results.

## 4. Decay (Ebbinghaus Forgetting Curve)

Unused memories fade over time following:

```
R(t) = e^(-t/S)
```

| Time since access | S=1.0 | S=2.0 | S=5.0 |
|-------------------|-------|-------|-------|
| 1 hour            | 37%   | 61%   | 82%   |
| 1 day             | ~0%   | 30%   | 67%   |
| 1 week            | ~0%   | ~0%   | 45%   |

Memories below the retrievability threshold are **archived** (not deleted). They can be reactivated if the context demands it.

## 5. Re-activation

When an archived memory becomes relevant again:
- Its retrievability is recalculated
- Strength is restored partially
- It re-enters the active memory pool

This prevents permanent loss while keeping the active set clean.
