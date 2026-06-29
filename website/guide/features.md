# Features

## Hybrid Retrieval

PowerMem fuses three retrieval strategies in one memory layer:

- **Vector search** — semantic similarity via embedding cosine distance
- **Full-text search** — BM25 keyword matching
- **Graph search** — entity relationship traversal

Results are merged using Reciprocal Rank Fusion (RRF) or configurable weighted scoring. No custom glue needed.

## Intelligent Memory Lifecycle

Memories aren't static note dumps. PowerMem manages the full lifecycle:

1. **Extraction** — LLM identifies key facts from conversations
2. **Update & merge** — similar memories are consolidated automatically
3. **Reinforcement** — frequently accessed memories strengthen (importance score increases)
4. **Decay** — unused memories fade following the Ebbinghaus forgetting curve: `R = e^(-t/S)`

## Experience + Skill Distillation

A two-layer self-evolving memory system:

| Layer | What it stores | Example |
|-------|---------------|---------|
| **Experience** | What happened, outcomes, context | "Deploying to prod-X requires VPN first" |
| **Skill** | How to do things, reusable workflows | "Steps for zero-downtime deployment" |

```python
memory.add_experience("Migrating DB with Alembic: always run autogenerate first", user_id="alice")
memory.add_skill("DB migration: 1) alembic autogenerate 2) review diff 3) apply", user_id="alice")
memory.distill_all()  # batch distillation
```

## Multi-Agent Isolation

```
┌─────────────────────────────────────────┐
│  Agent Group A        Agent Group B     │
│  ┌───────┐ ┌───────┐ ┌───────┐        │
│  │Agent 1│ │Agent 2│ │Agent 3│        │
│  └───┬───┘ └───┬───┘ └───┬───┘        │
│      │  shared memory    │             │
│      └────────┬──────────┘             │
│            private                     │
└─────────────────────────────────────────┘
         ┌─────────────┐
         │Public Memory │ (cross-group)
         └─────────────┘
```

Three scope levels: **private** (agent-only), **shared** (agent group), **public** (cross-group).

## User Profiles

PowerMem extracts and maintains user profiles automatically:

- Language preferences
- Communication style
- Domain expertise
- Workflow patterns

## Multimodal Support

Process text, images, and audio with multiple embedding providers:

- **Text**: OpenAI, Qwen, Gemini, HuggingFace, Ollama
- **Image**: Qwen multimodal, Gemini Vision
- **Audio**: Whisper-based transcription
