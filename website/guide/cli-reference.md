# CLI Reference

PowerMem ships a CLI tool `pmem` for memory operations from the terminal.

## Global options

| Flag | Description |
|------|-------------|
| `--env-file PATH` | Path to `.env` file |
| `-j`, `--json` | JSON output |
| `-v`, `--verbose` | Verbose logging |
| `--version` | Show version |

## Commands

### `pmem config init`

Interactive configuration wizard. Walks through LLM provider, embedding, storage backend.

### `pmem add <text>`

Store a memory.

```bash
pmem add "User prefers dark mode" --user alice
pmem add "Deploy failed: missing VPN" --user alice --type experience
```

| Flag | Description |
|------|-------------|
| `--user <id>` | User ID (required) |
| `--type <type>` | Memory type: `fact`, `experience`, `skill` |
| `--agent <id>` | Agent ID |
| `--scope <scope>` | `private`, `shared`, `public` |

### `pmem search <query>`

Search memories.

```bash
pmem search "user preferences" --user alice --limit 10
pmem search "deployment" --user alice --mode hybrid --rerank
```

| Flag | Description |
|------|-------------|
| `--user <id>` | User ID (required) |
| `--limit <n>` | Max results (default: 10) |
| `--mode <mode>` | `vector`, `bm25`, `graph`, `hybrid` |
| `--rerank` | Enable re-ranking |

### `pmem list`

List all memories for a user.

```bash
pmem list --user alice
pmem list --user alice --type skill
```

### `pmem stats`

Show memory statistics: counts by user, agent, type, sub-store.

### `pmem dashboard`

Launch the web-based memory dashboard.

```bash
pmem dashboard --port 8848
```

### `pmem backup` / `pmem restore`

Backup and restore memory data.

```bash
pmem backup --output backup.json
pmem restore --input backup.json
```
