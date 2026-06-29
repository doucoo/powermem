# Architecture

PowerMem uses a 5-layer architecture:

```
┌─────────────────────────────────────────────────┐
│  External Layer                                  │
│  Claude Code │ Cursor │ VS Code │ MCP │ CLI     │
├─────────────────────────────────────────────────┤
│  API Layer                                       │
│  Python SDK │ HTTP REST │ MCP Server │ CLI      │
├─────────────────────────────────────────────────┤
│  Core Layer                                      │
│  Memory Pipeline │ Retrieval Engine │ Profiles   │
│  Decay Engine │ Distillation │ Sub-stores        │
├─────────────────────────────────────────────────┤
│  Model Layer                                     │
│  LLM Providers │ Embedding Providers │ Rerank   │
├─────────────────────────────────────────────────┤
│  Storage Layer                                   │
│  OceanBase │ PostgreSQL │ SQLite │ seekdb        │
└─────────────────────────────────────────────────┘
```

## Memory Pipeline

When a conversation or action occurs:

1. **Input** — text/image/audio arrives via SDK, HTTP, or MCP
2. **LLM Extraction** — the model identifies key facts, decisions, and entities
3. **Update & Merge** — new facts are compared against existing memories; duplicates are merged
4. **Embedding** — the memory text is converted to a vector
5. **Storage** — the memory + vector + metadata is persisted
6. **Graph Update** — entity relationships are extracted and stored in the graph

## Retrieval Engine

Queries are processed through three parallel paths:

```
Query → [Vector Search] ─┐
      → [Full-Text BM25] ─┤→ RRF Fusion → Re-rank → Top-K results
      → [Graph Search]  ─┘
```

### Reciprocal Rank Fusion (RRF)

Each retrieval path returns a ranked list. RRF combines them:

```
score(d) = Σ 1 / (k + rank_i(d))
```

where `k` is a smoothing constant (default 60) and `rank_i(d)` is the rank of document `d` in path `i`.

## Decay Engine

Implements Ebbinghaus-style forgetting:

```
R(t) = e^(-t/S)
```

- `R` = retrievability (probability of recall)
- `t` = time since last access
- `S` = memory strength (increases with each successful retrieval)

Memories with `R < threshold` are archived but not deleted — they can be reactivated if context demands it.

## Sub-stores & Routing

Memories are organized into sub-stores for domain isolation:

- **Facts** — static knowledge (user preferences, project facts)
- **Experiences** — episodic memories (what happened, outcomes)
- **Skills** — procedural knowledge (how to do things)
- **Custom** — user-defined sub-stores for specific domains

Queries are automatically routed to the relevant sub-store(s) based on intent classification.

## Web Dashboard

The built-in dashboard provides:

- Memory count and distribution by user, agent, type
- Health metrics (decay curves, retrieval latency)
- Search interface
- Memory CRUD operations
