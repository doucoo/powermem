---
layout: home

hero:
  name: "PowerMem"
  text: "为 AI 应用构建"
  tagline: "持久化记忆"
  image:
    src: /logo-light.svg
    alt: PowerMem
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/oceanbase/powermem

features:
  - icon: 👨‍💻
    title: "开发者友好"
    details: "简洁的 Python SDK，自动从 .env 加载配置。同时支持 MCP Server 和 HTTP API Server 两种接入方式。"

  - icon: 🧠
    title: "智能记忆管理"
    details: "LLM 驱动的自动提取、重复检测、冲突解决，以及基于认知科学的艾宾浩斯时间衰减加权。"

  - icon: 🤖
    title: "Multi-Agent 支持"
    details: "每个 Agent 独立的记忆空间，支持跨 Agent 共享与协作，通过 scope 控制实现灵活权限管理。"

  - icon: 🌐
    title: "多模态支持"
    details: "文本、图片、音频记忆，自动转换为文本描述存储，支持多模态混合内容检索。"

  - icon: 🗄️
    title: "深度优化的数据存储"
    details: "子存储分区管理与自动路由。向量 + 全文 + 图谱多通道召回，精确检索复杂记忆关系。"

  - icon: 🔌
    title: "全平台集成"
    details: "Claude Code、Cursor、VS Code、Codex、Windsurf、LangChain 等一线插件原生支持。"
---

## 为什么选 PowerMem？

AI Agent 不能只靠聊天历史。上下文窗口有限，"全部保存"的粗暴记忆方式很快变得嘈杂、昂贵且难以检索。**PowerMem** 将对话、行为和反馈转化为结构化的长期记忆，支持搜索、更新、衰减和跨 Agent 共享。

### 核心优势

- **智能生命周期** — LLM 驱动的提取、更新、合并与艾宾浩斯衰减
- **自进化两层记忆** — 经验 + 技能蒸馏，让 Agent 真正学习而非单纯回忆
- **混合检索** — 向量、全文、图谱、时效性信号统一在一个记忆层
- **生产级接入面** — Python SDK、HTTP Server、MCP、CLI、AI 客户端插件

## Benchmark 亮点

<div class="benchmark-grid">
  <div class="stat-card">
    <div class="stat-value">87.79%</div>
    <div class="stat-label">LOCOMO 准确率（+65.9%）</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">-91.6%</div>
    <div class="stat-label">检索 p95 延迟</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">-96.5%</div>
    <div class="stat-label">Token 消耗</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">39%</div>
    <div class="stat-label">AppWorld 通过率（+62.5%）</div>
  </div>
</div>

## 快速开始

```bash
pip install powermem
pmem config init   # 交互式配置
```

```python
from powermem import auto_config, Memory

config = auto_config()
memory = Memory(config)

# 存储记忆
memory.add("用户偏好 IDE 使用暗色主题", user_id="alice")

# 语义搜索
results = memory.search("用户有什么偏好？", user_id="alice", limit=5)
```

## 支持的集成

<div class="integration-grid">
  <div class="integration-card">Claude Code</div>
  <div class="integration-card">Cursor</div>
  <div class="integration-card">VS Code</div>
  <div class="integration-card">Codex</div>
  <div class="integration-card">Windsurf</div>
  <div class="integration-card">LangChain</div>
  <div class="integration-card">LangGraph</div>
  <div class="integration-card">MCP</div>
</div>
