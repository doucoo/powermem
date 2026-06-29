# Hybrid Retrieval

PowerMem's retrieval engine combines three strategies for optimal recall:

## Vector Search

Semantic similarity via embedding vectors. Best for:
- Natural language queries ("What does the user prefer?")
- Conceptual matching ("deployment issues" matches "CI pipeline failure")
- Cross-language retrieval (query in English, match Chinese memories)

```python
results = memory.search("How to deploy to production?", user_id="alice")
```

## Full-Text Search (BM25)

Keyword-based matching using BM25 scoring. Best for:
- Exact term matching ("error 404", "NullPointerException")
- Technical identifiers (function names, file paths, error codes)
- When you know the specific words to look for

```python
results = memory.search("alembic autogenerate", user_id="alice", search_mode="bm25")
```

## Graph Search

Entity-relationship traversal. Best for:
- Relationship queries ("Who works on project X?")
- Connected knowledge ("What depends on service Y?")
- Multi-hop reasoning

```python
results = memory.search("projects managed by alice", user_id="alice", search_mode="graph")
```

## Fusion

All three paths run in parallel and results are merged via Reciprocal Rank Fusion (RRF):

```
final_score(d) = Σ 1/(k + rank_i(d))
```

You can also configure weighted scoring or use only specific retrieval modes.

## Re-ranking

After fusion, results can be re-ranked using a cross-encoder model for higher precision:

```python
results = memory.search("query", user_id="alice", rerank=True, rerank_top_n=5)
```

Supported rerank providers: Jina, Qwen, Z.AI.
