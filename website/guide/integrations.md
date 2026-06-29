# Integrations

PowerMem ships first-party plugins for the most common AI clients. All point at the same backend — no per-client schema rewrites.

## AI Client Plugins

| Client | Install | Mode |
|--------|---------|------|
| **Claude Code** | `git clone` + follow `apps/claude-code-plugin/SETUP.md` | HTTP (default), CLI optional |
| **Cursor / VS Code / Codex / Windsurf / Copilot** | Install PowerMem VS Code extension, run "Link to AI tools" | MCP or HTTP |
| **OpenClaw (ClawdBot)** | `openclaw plugins install memory-powermem` | CLI (default) |
| **Claude Desktop / Cline / any MCP client** | `uvx powermem-mcp sse` | MCP (SSE / stdio / streamable-http) |

## SDKs

| Language | Package |
|----------|---------|
| **Python** | `pip install powermem` |
| **Go** | `github.com/ob-labs/powermem-go` |
| **Java** | `github.com/ob-labs/powermem-java` |
| **TypeScript** | `github.com/ob-labs/powermem-ts` |

## Framework Integration

### LangChain / LangGraph

```python
pip install powermem
# See examples/langchain_integration.py
```

### AgentScope

MCP-based integration — connect via the PowerMem MCP server.

## Server Modes

### HTTP API Server

```bash
powermem-server --host 0.0.0.0 --port 8848
```

REST API for any HTTP client. Swagger docs at `http://localhost:8848/docs`.

### MCP Server

```bash
uvx powermem-mcp sse    # SSE mode (default port 8848)
uvx powermem-mcp stdio  # stdio mode for local MCP clients
```

### CLI

```bash
pmem add "memory text" --user alice
pmem search "query" --user alice
pmem list --user alice
pmem stats
pmem dashboard
```

## All agents share one memory server

The key architectural decision: all clients point at the same PowerMem backend. Agent A and Agent B can share memories (via shared scope) while keeping private memories isolated. No data duplication.
