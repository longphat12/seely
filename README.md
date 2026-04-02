# 🔍 Seely — SEO Audit Platform

Real-time SEO auditing platform with a Chrome extension for scanning and a Next.js dashboard for monitoring.

## Architecture

```
seely/
├── apps/
│   ├── web/          # Next.js 16 — Dashboard + API (Route Handlers)
│   └── extension/    # WXT + React — Chrome Extension (MV3)
├── packages/
│   ├── seo-types/    # Shared TypeScript interfaces
│   ├── seo-rules/    # 18 SEO rules + scorer + engine
│   └── seo-parser/   # DOM extraction utilities
├── prisma/           # Schema + migrations
└── infra/docker/     # PostgreSQL via Docker Compose
```

**Key decisions:**
- **2-app monorepo** — no separate API app, backend lives in Next.js Route Handlers
- **Server re-score** — extension submits extracted data, server runs rule engine (source of truth)
- **Dual auth** — Bearer token (extension) + session cookie (dashboard)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 19, TanStack Query, Recharts |
| Extension | WXT 0.20, React, Chrome MV3 |
| Backend | Next.js Route Handlers, Zod validation |
| Database | PostgreSQL 16 (Docker), Prisma ORM 6.19 |
| Auth | jose (JWT HS256), Argon2 password hashing |
| Monorepo | pnpm workspaces, Turborepo |

## Prerequisites

- Node.js 20+
- pnpm 9+
- Docker & Docker Compose

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start PostgreSQL

```bash
docker compose -f infra/docker/docker-compose.yml up -d
```

### 3. Configure environment

```bash
cp .env.example .env
# Default values work for local dev
```

### 4. Run migrations & seed

```bash
pnpm db:migrate
pnpm db:seed
```

### 5. Start development

```bash
pnpm dev
```

This starts:
- **Web dashboard** at `http://localhost:3000`
- **Extension** dev server (load unpacked from `apps/extension/.output/chrome-mv3`)

### 6. Load the extension

1. Open `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select `apps/extension/.output/chrome-mv3`

## API Endpoints (18 total)

### Auth
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login, returns JWT |
| POST | `/api/auth/logout` | Clear session cookie |

### Projects
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/projects` | List user's projects |
| POST | `/api/projects` | Create project |
| GET | `/api/projects/:id` | Project detail |
| PATCH | `/api/projects/:id` | Update project |

### Pages
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/projects/:id/pages` | List project pages |
| GET | `/api/pages/:id` | Page detail |

### Audits
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/audits` | Ingest audit from extension |
| GET | `/api/audits/:id` | Audit detail with metrics & issues |
| GET | `/api/projects/:id/audits` | List project audits |
| GET | `/api/pages/:id/audits` | List page audits |

### Issues
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/audits/:id/issues` | List audit issues |
| PATCH | `/api/issues/:id/status` | Update issue status (OPEN/FIXED/IGNORED) |

### Reports
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/projects/:id/summary` | Project KPIs |
| GET | `/api/projects/:id/history` | Score history (for charts) |
| GET | `/api/projects/:id/top-issues` | Top 20 open issues |

## SEO Rules (18 MVP)

| # | Code | Category | Severity |
|---|------|----------|----------|
| 1 | TITLE_MISSING | ON_PAGE | CRITICAL |
| 2 | TITLE_TOO_SHORT | ON_PAGE | MEDIUM |
| 3 | TITLE_TOO_LONG | ON_PAGE | MEDIUM |
| 4 | META_DESC_MISSING | ON_PAGE | HIGH |
| 5 | META_DESC_TOO_SHORT | ON_PAGE | MEDIUM |
| 6 | META_DESC_TOO_LONG | ON_PAGE | LOW |
| 7 | H1_MISSING | ON_PAGE | HIGH |
| 8 | H1_MULTIPLE | ON_PAGE | MEDIUM |
| 9 | H2_MISSING | ON_PAGE | MEDIUM |
| 10 | CANONICAL_MISSING | TECHNICAL | HIGH |
| 11 | META_ROBOTS_NOINDEX | TECHNICAL | CRITICAL |
| 12 | VIEWPORT_MISSING | TECHNICAL | HIGH |
| 13 | SCHEMA_MISSING | TECHNICAL | MEDIUM |
| 14 | OG_MISSING | TECHNICAL | LOW |
| 15 | TWITTER_CARD_MISSING | TECHNICAL | LOW |
| 16 | IMAGES_ALT_MISSING | CONTENT | HIGH |
| 17 | WORD_COUNT_LOW | CONTENT | HIGH |
| 18 | DOM_TOO_LARGE | PERFORMANCE | MEDIUM |

## Database Schema

9 models: `User`, `Project`, `ProjectMember`, `Page`, `Audit`, `AuditMetrics`, `Issue`, `IssueStatusHistory`, `AuditSnapshot`

## Scoring Algorithm

- **Category weights:** On-Page (35), Technical (25), Content (20), Performance (20)
- **Severity penalties:** Critical (15), High (10), Medium (6), Low (3)
- Each category: `raw = max(0, weight - penalties)`, normalized to 0–100
- Overall: weighted average of normalized category scores

## Testing

```bash
# Run unit tests (47 tests)
cd packages/seo-rules && pnpm test

# Build entire monorepo
pnpm turbo build

# Lint
cd apps/web && pnpm lint
```

## Seed Data

The seed creates:
- User: `admin@seely.dev` / `password123`
- Project: `example.com`
- 2 audits with 10 issues total

## License

MIT
