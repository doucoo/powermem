# Installation

## pip install

```bash
pip install powermem
```

### Optional extras

| Extra | What it adds |
|-------|-------------|
| `pip install "powermem[seekdb]"` | Embedded OceanBase seekdb (zero-config local storage) |
| `pip install "powermem[server]"` | HTTP API server (FastAPI) |
| `pip install "powermem[mcp]"` | MCP server (SSE / stdio / streamable-http) |
| `pip install "powermem[all]"` | All of the above |

## From source

```bash
git clone https://github.com/oceanbase/powermem.git
cd powermem
pip install -e ".[all]"
```

## Storage backends

| Backend | Use case | Config |
|---------|----------|--------|
| **Embedded seekdb** | Dev laptop, no server needed | Default when `seekdb` extra installed |
| **OceanBase** | Production, graph search | Set `OCEANBASE_HOST` |
| **PostgreSQL + pgvector** | Existing PG infrastructure | Set `VECTOR_STORE=postgres` |
| **SQLite** | Lightweight, portable | Set `VECTOR_STORE=sqlite` |

## Embedding providers

| Provider | Model | Dims | API key? |
|----------|-------|------|----------|
| **Local (default)** | `all-MiniLM-L6-v2` | 384 | No |
| **OpenAI** | `text-embedding-3-small` | 1536 | Yes |
| **Qwen** | `text-embedding-v3` | 1024 | Yes |
| **Ollama** | Any local model | Varies | No |

## Verify installation

```bash
pmem --version
pmem config init  # interactive check
```
