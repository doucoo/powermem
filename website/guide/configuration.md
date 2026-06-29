# Configuration

PowerMem loads configuration from a `.env` file or environment variables. Use `pmem config init` for an interactive setup.

## Core settings

| Variable | Default | Description |
|----------|---------|-------------|
| `LLM_PROVIDER` | — | LLM provider: `openai`, `anthropic`, `qwen`, `gemini`, `ollama`, etc. |
| `LLM_API_KEY` | — | API key for the LLM provider |
| `LLM_MODEL` | provider default | Model name |
| `VECTOR_STORE` | `oceanbase` | Storage backend: `oceanbase`, `postgres`, `sqlite` |

## Embedding settings

| Variable | Default | Description |
|----------|---------|-------------|
| `EMBEDDER_PROVIDER` | `huggingface` | `huggingface`, `openai`, `qwen`, `ollama`, etc. |
| `EMBEDDER_MODEL` | `all-MiniLM-L6-v2` | Embedding model name |
| `EMBEDDER_DIMS` | `384` | Output dimension (must match storage config) |

## Storage settings

| Variable | Default | Description |
|----------|---------|-------------|
| `OCEANBASE_HOST` | — | Remote OceanBase host (unset = embedded seekdb) |
| `OCEANBASE_PATH` | `./seekdb_data` | Local data dir for embedded mode |
| `POSTGRES_DSN` | — | PostgreSQL connection string |
| `SQLITE_PATH` | `./powermem.db` | SQLite file path |

## Full config reference

For all available settings, copy `.env.example.full` to `.env`:

```bash
cp .env.example.full .env
```

This file documents every available knob, grouped by component.
