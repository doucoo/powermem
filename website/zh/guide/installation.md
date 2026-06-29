# 安装说明

## pip 安装

```bash
pip install powermem
```

### 可选附加依赖

| 附加包 | 内容 |
|--------|------|
| `pip install "powermem[seekdb]"` | 嵌入式 OceanBase seekdb（零配置本地存储） |
| `pip install "powermem[server]"` | HTTP API 服务器（FastAPI） |
| `pip install "powermem[mcp]"` | MCP 服务器（SSE / stdio / streamable-http） |
| `pip install "powermem[all]"` | 以上全部 |

## 从源码安装

```bash
git clone https://github.com/oceanbase/powermem.git
cd powermem
pip install -e ".[all]"
```

## 存储后端

| 后端 | 适用场景 | 配置 |
|------|----------|------|
| **嵌入式 seekdb** | 开发笔记本，无需服务器 | 安装 `seekdb` 附加包后默认 |
| **OceanBase** | 生产环境，支持图谱检索 | 设置 `OCEANBASE_HOST` |
| **PostgreSQL + pgvector** | 已有 PG 基础设施 | 设置 `VECTOR_STORE=postgres` |
| **SQLite** | 轻量、便携 | 设置 `VECTOR_STORE=sqlite` |

## 嵌入模型

| 提供商 | 模型 | 维度 | 需要 API Key？ |
|--------|------|------|----------------|
| **本地（默认）** | `all-MiniLM-L6-v2` | 384 | 否 |
| **OpenAI** | `text-embedding-3-small` | 1536 | 是 |
| **Qwen** | `text-embedding-v3` | 1024 | 是 |
| **Ollama** | 任意本地模型 | 可变 | 否 |

## 验证安装

```bash
pmem --version
pmem config init  # 交互式检查
```
