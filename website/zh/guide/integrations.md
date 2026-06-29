# 集成生态

PowerMem 为常见 AI 客户端提供一线插件支持。所有客户端指向同一后端——无需为每个客户端重写 schema。

## AI 客户端插件

| 客户端 | 安装方式 | 模式 |
|--------|----------|------|
| **Claude Code** | `git clone` + 按 `apps/claude-code-plugin/SETUP.md` 操作 | HTTP（默认），CLI 可选 |
| **Cursor / VS Code / Codex / Windsurf / Copilot** | 安装 PowerMem VS Code 扩展，运行"Link to AI tools" | MCP 或 HTTP |
| **OpenClaw (ClawdBot)** | `openclaw plugins install memory-powermem` | CLI（默认） |
| **Claude Desktop / Cline / 任意 MCP 客户端** | `uvx powermem-mcp sse` | MCP（SSE / stdio / streamable-http） |

## SDK

| 语言 | 包 |
|------|------|
| **Python** | `pip install powermem` |
| **Go** | `github.com/ob-labs/powermem-go` |
| **Java** | `github.com/ob-labs/powermem-java` |
| **TypeScript** | `github.com/ob-labs/powermem-ts` |

## 框架集成

### LangChain / LangGraph

```python
pip install powermem
# 参见 examples/langchain_integration.py
```

### AgentScope

基于 MCP 集成——通过 PowerMem MCP Server 连接。

## 服务器模式

### HTTP API 服务器

```bash
powermem-server --host 0.0.0.0 --port 8848
```

为任意 HTTP 客户端提供 REST API。Swagger 文档在 `http://localhost:8848/docs`。

### MCP 服务器

```bash
uvx powermem-mcp sse    # SSE 模式（默认端口 8848）
uvx powermem-mcp stdio  # stdio 模式，供本地 MCP 客户端使用
```

### CLI

```bash
pmem add "记忆文本" --user alice
pmem search "查询" --user alice
pmem list --user alice
pmem stats
pmem dashboard
```

## 所有 Agent 共享一个记忆服务器

关键架构决策：所有客户端指向同一个 PowerMem 后端。Agent A 和 Agent B 可以共享记忆（通过 shared 作用域），同时保持私有记忆隔离。无数据冗余。
