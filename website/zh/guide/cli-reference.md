# CLI 参考

PowerMem 提供 CLI 工具 `pmem`，用于从终端操作记忆。

## 全局选项

| 标志 | 说明 |
|------|------|
| `--env-file PATH` | `.env` 文件路径 |
| `-j`, `--json` | JSON 输出 |
| `-v`, `--verbose` | 详细日志 |
| `--version` | 显示版本 |

## 命令

### `pmem config init`

交互式配置向导。引导设置 LLM 提供商、嵌入模型、存储后端。

### `pmem add <text>`

存储记忆。

```bash
pmem add "用户偏好暗色模式" --user alice
pmem add "部署失败：缺少 VPN" --user alice --type experience
```

| 标志 | 说明 |
|------|------|
| `--user <id>` | 用户 ID（必需） |
| `--type <type>` | 记忆类型：`fact`、`experience`、`skill` |
| `--agent <id>` | Agent ID |
| `--scope <scope>` | `private`、`shared`、`public` |

### `pmem search <query>`

搜索记忆。

```bash
pmem search "用户偏好" --user alice --limit 10
pmem search "部署" --user alice --mode hybrid --rerank
```

| 标志 | 说明 |
|------|------|
| `--user <id>` | 用户 ID（必需） |
| `--limit <n>` | 最大结果数（默认：10） |
| `--mode <mode>` | `vector`、`bm25`、`graph`、`hybrid` |
| `--rerank` | 启用重排序 |

### `pmem list`

列出用户的所有记忆。

```bash
pmem list --user alice
pmem list --user alice --type skill
```

### `pmem stats`

显示记忆统计：按用户、Agent、类型、子存储计数。

### `pmem dashboard`

启动 Web 记忆面板。

```bash
pmem dashboard --port 8848
```

### `pmem backup` / `pmem restore`

备份和恢复记忆数据。

```bash
pmem backup --output backup.json
pmem restore --input backup.json
```
