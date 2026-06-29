# Benchmark

PowerMem is evaluated on two standard benchmarks: LOCOMO (long-conversation memory) and AppWorld (agent task completion).

## LOCOMO Dataset

LOCOMO tests an agent's ability to answer questions from long conversation histories.

| Metric | PowerMem | Baseline | Change |
|--------|----------|----------|--------|
| **Accuracy** | 87.79% | 52.9% | **+65.9%** |
| **Search p95 latency** | 1.44s | 17.12s | **-91.6%** |
| **Tokens per query** | ~900 | ~26,000 | **-96.5%** |

**What this means**: PowerMem agents answer more accurately, 12x faster, and use 29x fewer tokens than the baseline (naive context window stuffing).

## AppWorld Dataset

AppWorld tests agent task completion in simulated real-world environments.

| Metric | PowerMem | Baseline | Change |
|--------|----------|----------|--------|
| **Pass rate** | 39% | 24% | **+62.5%** |
| **Avg steps to complete** | 6.2 | 9.5 | **-34.7%** |
| **Total tokens** | 1.74M | 2.56M | **-32.0%** |

**What this means**: Agents with PowerMem complete tasks in fewer steps (less trial and error) and use less context.

## Why PowerMem Wins

1. **Selective retrieval** — only relevant memories are loaded, not the entire history
2. **Structured extraction** — facts are pre-processed, not raw chat logs
3. **Decay & merge** — stale memories don't pollute retrieval results
4. **Hybrid search** — vector + BM25 + graph catches what any single method misses
