# 快速开始

PowerMem 是 AI Agent 的持久化、自进化记忆插件。本指南带你在 5 分钟内完成安装和首次使用。

## 前置条件

- Python 3.9+
- 一个 LLM API Key（OpenAI、Anthropic、Qwen 等均可）

## 安装

```bash
pip install powermem
```

如需零配置本地存储（嵌入式 OceanBase）：

```bash
pip install "powermem[seekdb]"
```

## 配置

复制 `.env.example` 到 `.env` 并设置你的 LLM Key：

```bash
cp .env.example .env
# 编辑 .env：设置 LLM_PROVIDER 和 LLM_API_KEY
```

或使用交互式向导：

```bash
pmem config init
```

向导会引导你配置：
- **LLM 提供商** — OpenAI、Anthropic、Qwen 等
- **嵌入模型** — 默认使用本地 `all-MiniLM-L6-v2`（384维，无需 API Key）
- **存储后端** — 嵌入式 seekdb（零配置）、OceanBase、PostgreSQL 或 SQLite

## 第一条记忆

```python
from powermem import auto_config, Memory

config = auto_config()
memory = Memory(config)

# 添加记忆
result = memory.add("用户偏好所有 IDE 使用暗色主题", user_id="alice")
print(f"已存储: {result}")

# 语义搜索
results = memory.search("用户有什么偏好？", user_id="alice", limit=5)
for r in results:
    print(f"  {r['text']} (得分: {r['score']:.3f})")
```

## CLI 快速参考

```bash
pmem add "记住这个事实" --user alice
pmem search "用户偏好" --user alice --limit 5
pmem list --user alice
pmem stats                       # 记忆统计
pmem dashboard                   # 启动 Web 面板
```

## 下一步

- [安装指南](installation) — 详细选项和附加依赖
- [特性概览](features) — 混合检索、记忆生命周期、经验+技能蒸馏
- [架构说明](architecture) — PowerMem 底层工作原理
- [集成生态](integrations) — 接入 Claude Code、Cursor、VS Code、MCP 等
