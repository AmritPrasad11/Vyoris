# Vyoris AI - System Architecture Baseline

## Product Overview

**Vyoris AI** is an AI-powered lead intelligence platform. The long-term product allows users to describe business/lead requirements in natural language, discover relevant business entities, enrich detailed firmographic/technographic attributes, score and rank sales opportunities, and orchestrate actionable outreach.

---

## Monorepo Layout & Separation of Concerns

```
vyoris/
├── apps/
│   ├── web/               # Next.js 16 App Router UI application
│   └── api/               # Modular Express TypeScript backend API service layer
│
├── packages/
│   ├── ui/                # React component library styled with design tokens
│   ├── config/            # Shared TSConfig base & Design System tokens
│   └── types/             # Domain entities, API schemas, & LLM interfaces
│
├── docs/                  # Architectural guidelines & documentation
├── .env.example           # Monorepo environment configuration template
├── .gitignore             # Git ignore rules
└── package.json           # npm Workspaces root manifest
```

### Architectural Principles

1. **Frontend Isolation**: `apps/web` contains UI presentation and routing only. Business logic, data fetching abstractions, and AI integrations belong in `apps/api` or dedicated service packages.
2. **No Business Logic in UI**: UI components inside `packages/ui` are purely functional and presentational.
3. **Provider-Agnostic AI Integration**: AI functionality relies on `ILLMProvider` interfaces defined in `@vyoris/types`, preventing vendor lock-in.
4. **Environment-Based Configuration**: Secrets and endpoints are injected via `.env` variables and validated at runtime.

---

## Visual Identity & Design System Baseline

- **Primary (60%)**: Stark Crisp White (`#FFFFFF`) — Main surface backgrounds, cards, modal panels, whitespace.
- **Secondary (30%)**: Dark Charcoal (`#0F172A`) — Primary typography, headings, structural navigation bars.
- **Accent (10%)**: Energetic Orange (`#F97316`) — Primary CTA buttons, active state indicators, key highlights.

```typescript
// @vyoris/config/tokens.ts
export const VyorisColors = {
  primary: { DEFAULT: '#FFFFFF', hover: '#F8FAFC', border: '#E2E8F0' },
  secondary: { DEFAULT: '#0F172A', hover: '#1E293B', muted: '#475569' },
  accent: { DEFAULT: '#F97316', hover: '#EA580C', light: '#FFEDD5' },
};
```

---

## Roadmap & Future Infrastructure (Post-Phase 0)

- **Database Layer**: PostgreSQL with Prisma/Drizzle ORM for lead intelligence data, user accounts, and search history.
- **Cache & Queue Layer**: Redis for temporary search state caching and job queues.
- **AI Agent Orchestration**: Multi-agent lead discovery pipelines executing structured web search and firmographic enrichment.
- **Containerization**: Docker Compose for production/local service isolation.
