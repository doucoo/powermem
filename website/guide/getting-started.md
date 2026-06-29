# Getting Started

PowerMem is a persistent, self-evolving memory plugin for AI agents. This guide walks you through installation and first use in under 5 minutes.

## Prerequisites

- Python 3.9+
- An LLM API key (OpenAI, Anthropic, Qwen, etc.)

## Install

```bash
pip install powermem
```

For zero-config local storage (embedded OceanBase):

```bash
pip install "powermem[seekdb]"
```

## Configure

Copy `.env.example` to `.env` and set your LLM key:

```bash
cp .env.example .env
# Edit .env: set LLM_PROVIDER and LLM_API_KEY
```

Or use the interactive wizard:

```bash
pmem config init
```

The wizard walks you through:
- **LLM provider** — OpenAI, Anthropic, Qwen, etc.
- **Embedding provider** — defaults to local `all-MiniLM-L6-v2` (384 dims, no API key needed)
- **Storage backend** — embedded seekdb (zero-config), OceanBase, PostgreSQL, or SQLite

## First Memory

```python
from powermem import auto_config, Memory

config = auto_config()
memory = Memory(config)

# Add a memory
result = memory.add("User prefers dark mode in all IDEs", user_id="alice")
print(f"Stored: {result}")

# Search
results = memory.search("What does the user prefer?", user_id="alice", limit=5)
for r in results:
    print(f"  {r['text']} (score: {r['score']:.3f})")
```

## CLI Quick Reference

```bash
pmem add "Remember this fact" --user alice
pmem search "user preferences" --user alice --limit 5
pmem list --user alice
pmem stats                       # memory statistics
pmem dashboard                   # launch web dashboard
```

## Next Steps

- [Installation guide](installation) — detailed options and extras
- [Features overview](features) — hybrid retrieval, memory lifecycle, Experience+Skill
- [Architecture](architecture) — how PowerMem works under the hood
- [Integrations](integrations) — connect Claude Code, Cursor, VS Code, MCP, etc.
