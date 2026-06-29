# 经验与技能蒸馏

PowerMem 的两层蒸馏系统让 Agent 从交互中**学习**，而非单纯回忆事实。

## 两层结构

### 经验层
情景记忆——发生了什么、什么上下文、什么结果。

```python
memory.add_experience(
    "部署到 prod-X 失败，因为 VPN 没连。重新连 VPN 后重试成功。",
    user_id="alice"
)
```

### 技能层
程序性知识——如何做事情，从经验中蒸馏。

```python
memory.add_skill(
    "零停机部署: 1) 连 VPN 2) 健康检查 3) 蓝绿部署 4) 验证指标 5) 切流量",
    user_id="alice"
)
```

## 蒸馏过程

```
经验 ──→ 模式检测 ──→ 技能提取 ──→ 技能存储
  ↑                                      │
  └────────── 反馈循环 ──────────────────┘
```

1. **收集** — 经验随时间积累
2. **模式** — LLM 识别跨经验的重复模式
3. **蒸馏** — 模式转化为可操作的技能
4. **应用** — 技能指导未来决策
5. **反馈** — 结果优化技能

## 批量蒸馏

一次性处理所有积累的经验：

```python
memory.distill_all()
```

LLM 遍历所有经验记忆，提取新技能或更新现有技能。

## 何时使用

| 场景 | 层级 |
|------|------|
| "用户偏好暗色模式" | 事实（普通记忆） |
| "上次部署因未连 VPN 失败" | 经验 |
| "部署清单：VPN → 健康检查 → 部署" | 技能 |
| "如何配置 OceanBase 集群" | 技能 |

## 跨层搜索

```python
# 搜索经验
results = memory.search_experiences("部署问题", user_id="alice")

# 搜索技能
results = memory.search_skills("部署", user_id="alice")

# 搜索全部（默认）
results = memory.search("部署", user_id="alice")
```
