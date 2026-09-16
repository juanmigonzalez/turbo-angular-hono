# Architecture contract

This document records stable stack decisions for every project created from the template. Product-specific decisions belong in `product-context.md`.

## Applications

### Frontend

`apps/frontend` is an Angular standalone application using zoneless change detection. Keep browser code and UI concerns here. Prefer feature-oriented folders as the application grows, with tests next to the behavior they cover.

### Backend

`apps/backend/src/app.ts` builds and exports the Hono application. Routes and middleware must be reachable through this app without opening a network port. `src/index.ts` is the Node adapter and process entrypoint only.

This split makes API tests deterministic and prevents imports from starting a server as a side effect.

## Boundaries

- Frontend and backend may communicate over explicit HTTP contracts, not by importing each other's source.
- When types genuinely need to be shared, create a workspace package with a narrow public API.
- Environment-specific configuration enters at runtime. Commit documented `.env.example` files, never real `.env` files.
- Validate untrusted data at system boundaries before using it in domain logic.

The executable boundary checks live in `scripts/check-architecture.mjs` and run as part of both verification commands.

## Verification layers

| Layer            | Command                   | Purpose                                          |
| ---------------- | ------------------------- | ------------------------------------------------ |
| Architecture     | `pnpm check:architecture` | Fast repository invariants and secret-file guard |
| Static analysis  | `pnpm lint`               | TypeScript and ESLint rules across workspaces    |
| Unit/API tests   | `pnpm test`               | Angular behavior and in-memory Hono responses    |
| Production build | `pnpm build`              | Compilation and framework build integration      |
| Full gate        | `pnpm verify`             | The same readiness contract used by CI           |

Add browser end-to-end tests when a project gains a real user journey. Do not make the generic template's CI depend on placeholder UI flows.

## Decision rule

Prefer decisions that are reversible, testable, and local. Record a new invariant here only when it should apply to most projects created from this template; record product choices in `product-context.md` instead.
