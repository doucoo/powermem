---
layout: home

hero:
  name: "PowerMem"
  text: "AI 记忆插件"
  tagline: "持久化、自进化的 AI Agent 记忆 — 精准、敏捷、实惠"
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
  - icon: 🧠
    title: "混合检索"
    details: "向量 + 全文 + 图谱三路检索，RRF 融合排序，无需额外胶水代码"

  - icon: 🔄
    title: "自进化记忆"
    details: "两层经验 + 技能蒸馏，让 Agent 从交互中学习可复用的工作流"

  - icon: 📉
    title: "艾宾浩斯遗忘"
    details: "R = e^(-t/S) 时间衰减 + 访问强化，记忆保持新鲜而非静态堆积"

  - icon: 🤖
    title: "多智能体隔离"
    details: "私有、共享、公开三种作用域，支持 Agent 组和用户组级别隔离"

  - icon: 🔌
    title: "全平台集成"
    details: "Claude Code、Cursor、VS Code、Codex、Windsurf、LangChain 等一线插件原生支持"

  - icon: 🌐
    title: "多模态信号"
    details: "文本、图片、音频多模态处理，支持 OpenAI、Qwen、Gemini、Ollama 等嵌入模型"

  - icon: ⚡
    title: "生产级就绪"
    details: "Python SDK、HTTP API、MCP Server、CLI、Web 面板 — 同一后端，任意接入方式"

  - icon: 🗄️
    title: "灵活存储"
    details: "OceanBase（嵌入式 seekdb）、PostgreSQL + pgvector、SQLite — 从开发笔记本到生产集群"

  - icon: 📊
    title: "Benchmark 验证"
    details: "LOCOMO 准确率 87.79%（+65.9%），检索延迟降低 91.6%，Token 消耗节省 96.5%"
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
