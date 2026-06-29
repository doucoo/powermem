---
layout: home

hero:
  name: "PowerMem"
  text: "Build Persistent Memory"
  tagline: "for AI Applications"
  image:
    src: /logo-light.svg
    alt: PowerMem
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/oceanbase/powermem

features:
  - icon: 👨‍💻
    title: "Developer Friendly"
    details: "Simple Python SDK with .env auto-config. Also supports MCP Server and HTTP API Server integration."

  - icon: 🧠
    title: "Intelligent Memory Management"
    details: "LLM-driven extraction, duplicate detection, conflict resolution, and Ebbinghaus-style time-decay weighting."

  - icon: 🤖
    title: "Multi-Agent Support"
    details: "Independent memory spaces per agent, cross-agent sharing and collaboration with flexible scope control."

  - icon: 🌐
    title: "Multimodal Support"
    details: "Text, image, and audio memory with automatic conversion to text descriptions for storage and retrieval."

  - icon: 🗄️
    title: "Deeply Optimized Storage"
    details: "Sub-store partitioning with auto-routing. Vector + full-text + graph retrieval for complex memory relationships."

  - icon: 🔌
    title: "Universal Integration"
    details: "First-party plugins for Claude Code, Cursor, VS Code, Codex, Windsurf, LangChain, and more."
---

## Why PowerMem?

AI agents need more than chat history. Context windows are finite, and naive "save everything" memory quickly becomes noisy, expensive, and hard to retrieve from. **PowerMem** turns conversations, actions, and feedback into structured long-term memory that can be searched, updated, decayed, and shared across agents.

### Core Advantages

- **Intelligent lifecycle** — LLM-driven extraction, update, merge, and Ebbinghaus-style decay
- **Self-evolving two-layer memory** — Experience + Skill distillation for learning, not just recall
- **Hybrid retrieval** — vector, full-text, graph, and recency signals in one memory layer
- **Production surface** — Python SDK, HTTP server, MCP, CLI, and AI client plugins

## Benchmark Highlights

<div class="benchmark-grid">
  <div class="stat-card">
    <div class="stat-value">87.79%</div>
    <div class="stat-label">LOCOMO Accuracy (+65.9%)</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">-91.6%</div>
    <div class="stat-label">Search p95 Latency</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">-96.5%</div>
    <div class="stat-label">Token Usage</div>
  </div>
  <div class="stat-card">
    <div class="stat-value">39%</div>
    <div class="stat-label">AppWorld Pass Rate (+62.5%)</div>
  </div>
</div>

## Quick Start

```bash
pip install powermem
pmem config init   # interactive setup
```

```python
from powermem import auto_config, Memory

config = auto_config()
memory = Memory(config)

# Store a memory
memory.add("User prefers dark mode in IDEs", user_id="alice")

# Search memories
results = memory.search("What does the user prefer?", user_id="alice", limit=5)
```

## Supported Integrations

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
