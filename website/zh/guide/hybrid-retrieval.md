# 混合检索

PowerMem 的检索引擎融合三种策略以获得最优召回：

## 向量检索

基于嵌入向量的语义相似性。适用于：
- 自然语言查询（"用户有什么偏好？"）
- 概念匹配（"部署问题"匹配"CI 管线失败"）
- 跨语言检索（英文查询匹配中文记忆）

```python
results = memory.search("如何部署到生产环境？", user_id="alice")
```

## 全文检索（BM25）

基于 BM25 打分的关键词匹配。适用于：
- 精确术语匹配（"error 404"、"NullPointerException"）
- 技术标识符（函数名、文件路径、错误码）
- 当你知道要搜索的具体词语时

```python
results = memory.search("alembic autogenerate", user_id="alice", search_mode="bm25")
```

## 图谱检索

实体关系遍历。适用于：
- 关系查询（"谁负责项目 X？"）
- 关联知识（"什么依赖服务 Y？"）
- 多跳推理

```python
results = memory.search("alice 管理的项目", user_id="alice", search_mode="graph")
```

## 融合

三条路径并行运行，结果通过互惠排名融合（RRF）合并：

```
final_score(d) = Σ 1/(k + rank_i(d))
```

也可配置加权打分或仅使用特定检索模式。

## Re-ranking

融合后可使用交叉编码器模型进行重排序以提高精度：

```python
results = memory.search("查询", user_id="alice", rerank=True, rerank_top_n=5)
```

支持的 re-rank 提供商：Jina、Qwen、Z.AI。
