# 配置参考

PowerMem 从 `.env` 文件或环境变量加载配置。推荐使用 `pmem config init` 进行交互式配置。

## 核心配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `LLM_PROVIDER` | — | LLM 提供商：`openai`、`anthropic`、`qwen`、`gemini`、`ollama` 等 |
| `LLM_API_KEY` | — | LLM 提供商的 API Key |
| `LLM_MODEL` | 提供商默认 | 模型名称 |
| `VECTOR_STORE` | `oceanbase` | 存储后端：`oceanbase`、`postgres`、`sqlite` |

## 嵌入配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `EMBEDDER_PROVIDER` | `huggingface` | `huggingface`、`openai`、`qwen`、`ollama` 等 |
| `EMBEDDER_MODEL` | `all-MiniLM-L6-v2` | 嵌入模型名称 |
| `EMBEDDER_DIMS` | `384` | 输出维度（须与存储配置匹配） |

## 存储配置

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `OCEANBASE_HOST` | — | 远程 OceanBase 地址（不设置则使用嵌入式 seekdb） |
| `OCEANBASE_PATH` | `./seekdb_data` | 嵌入式模式本地数据目录 |
| `POSTGRES_DSN` | — | PostgreSQL 连接字符串 |
| `SQLITE_PATH` | `./powermem.db` | SQLite 文件路径 |

## 完整配置参考

复制 `.env.example.full` 到 `.env` 获取所有可用配置项：

```bash
cp .env.example.full .env
```

该文件按组件分组，记录了所有可调节的配置项。
