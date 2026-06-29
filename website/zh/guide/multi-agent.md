# 多智能体

PowerMem 支持多个 Agent 共享和隔离记忆。

## 作用域级别

| 作用域 | 可见性 | 适用场景 |
|--------|--------|----------|
| **Private** | 仅单个 Agent | Agent 特定笔记、草稿思考 |
| **Shared** | Agent 组 | 团队知识、项目上下文 |
| **Public** | 所有 Agent | 全局事实、共享偏好 |

## Agent 组

```python
memory = Memory(config, agent_id="agent-1", agent_group="team-alpha")

# 这条记忆对 team-alpha 中所有 Agent 可见
memory.add("Sprint 目标：完成 auth 模块", scope="shared", user_id="alice")

# 这条记忆仅 agent-1 可见
memory.add("我的内部推理链", scope="private", user_id="alice")
```

## 用户组

即使多个 Agent 服务同一用户，记忆也按用户隔离：

```python
# Agent 1 为用户 alice 存储
memory.add("Alice 偏好 Python", user_id="alice")

# Agent 2 为用户 alice 检索——看到相同的记忆
results = memory.search("用户偏好", user_id="alice")
```

## 跨 Agent 协作

Agent A 编写的技能可以被 Agent B 发现并使用：

```python
# Agent A（DevOps 专家）
agent_a_memory.add_skill("部署: VPN → 健康检查 → 蓝绿部署", user_id="shared-team")

# Agent B（通用助手）检索
results = agent_b_memory.search_skills("部署", user_id="shared-team")
```

## 隔离保证

- 私有记忆不会跨 Agent 泄露
- 共享记忆遵守组边界
- 用户记忆始终按 `user_id` 限定作用域
- 审计日志跟踪所有跨边界读取
