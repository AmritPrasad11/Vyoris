# Vyoris AI — AI-Powered Lead Intelligence Platform

> **Status: Phase 0 Foundation Complete** (Investor-Ready Monorepo Baseline)

Vyoris AI is an AI-powered lead intelligence platform. The long-term product allows users to describe their ideal target accounts in natural language, discover relevant business entities, enrich detailed firmographic data, analyze business opportunities, rank leads, and orchestrate action.

---

## 🏗 Repository Structure

Vyoris AI is structured as an **npm workspaces monorepo**:

```text
vyoris/
├── apps/
│   ├── web/               # Next.js 16 (App Router) + Tailwind CSS v4 Frontend
│   └── api/               # Express + TypeScript Modular API Service Layer
│
├── packages/
│   ├── ui/                # Shared React Component Library (Button, Card, Input, Badge)
│   ├── config/            # Shared TSConfig & Design Tokens (#FFFFFF, #0F172A, #F97316)
│   └── types/             # Shared TypeScript Types (Lead, API Response, ILLMProvider)
│
├── docs/                  # Architecture & Design System Documentation
│   └── architecture.md
│
├── .env.example           # Workspace-wide Environment Variable Template
├── .gitignore             # Global Git Ignore Rules
├── tsconfig.json          # Monorepo Base TypeScript Config
└── package.json           # Root npm Workspaces Manifest
```

---

## 🎨 Design System Baseline

Vyoris AI uses a strict visual identity designed for high trust, clarity, and investor readiness:

| Color Role | Name | HEX | Usage | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | Stark Crisp White | `#FFFFFF` | ~60% | Main backgrounds, card surfaces, content whitespace |
| **Secondary** | Dark Charcoal | `#0F172A` | ~30% | Headings, primary typography, navigation panels |
| **Accent** | Energetic Orange | `#F97316` | ~10% | Primary CTA buttons, active state indicators, key highlights |

---

## 🚀 Getting Started

### Step 1: Install Dependencies & Link Workspaces

From the root directory, run:

```bash
npm install
```

> **Important**: Running `npm install` at the root links internal workspace packages (`@vyoris/ui`, `@vyoris/config`, `@vyoris/types`) across `apps/web` and `apps/api`.

### Step 2: Start Development Servers

To start both the Next.js frontend (`apps/web`) and Express API backend (`apps/api`) concurrently:

```bash
npm run dev
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend API Service**: [http://localhost:4000/health](http://localhost:4000/health)

---

## 🛠 Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start `apps/web` (port 3000) and `apps/api` (port 4000) concurrently using `concurrently` |
| `npm run dev:web` | Start only the Next.js frontend application (`apps/web`) |
| `npm run dev:api` | Start only the Express API backend service (`apps/api`) |
| `npm run build` | Build all workspace applications and packages |
| `npm run typecheck` | Run TypeScript type checking across the monorepo |
| `npm run lint` | Run ESLint checks across all workspaces |

---

## 🔑 Environment Configuration

1. Copy `.env.example` to create your local `.env` file:
   ```bash
   cp .env.example .env
   ```
2. Configure application ports and endpoint URLs as needed:
   - `NEXT_PUBLIC_APP_URL`: `http://localhost:3000`
   - `NEXT_PUBLIC_API_URL`: `http://localhost:4000/api/v1`
   - `PORT`: `4000`

> ⚠️ **Security Notice**: Never commit `.env` files or API secrets to source control.

---

## 🗺 System Capabilities & Future Roadmap

| Capability / Module | Status | Description |
| :--- | :--- | :--- |
| **Monorepo Foundation** | ✅ **Phase 0 (Complete)** | Clean workspace layout, TS/ESLint configs, and design system tokens |
| **UI Components** | ✅ **Phase 0 (Complete)** | Reusable React components (`Button`, `Card`, `Input`, `Badge`) |
| **LLM Provider Abstraction** | ✅ **Phase 0 (Complete)** | `ILLMProvider` interface contract defined in `@vyoris/types` |
| **API Health & Status** | ✅ **Phase 0 (Complete)** | Express service baseline with `/health` and `/api/v1/status` routes |
| **PostgreSQL Database** | ⏳ *Future Phase* | Persistent data storage for leads, accounts, and queries |
| **Redis Cache / Queue** | ⏳ *Future Phase* | Transient search caching and async enrichment queues |
| **AI Lead Discovery** | ⏳ *Future Phase* | Natural language query processing & firmographic web enrichment |
| **Authentication & Users** | ⏳ *Future Phase* | Role-based user authentication and account management |
