# Setup & Solution Overview

## Submission

**Candidate:** Gustavo Cruz Laura  
**Position:** Fullstack Software Engineer

## Solution overview

A character roster built to the layout/behavior spec in `README.md`: a
global actions bar ("Add Character", "Attack All Characters") above a
responsive grid of character cards, each with Health/Attack/Defense
counters.

**Implemented:**
- Full layout and card styling per spec (colors, spacing, borders,
  equal-width/equal-height cards in rows of 3).
- Add Character / Attack All Characters global actions.
- Per-card Health/Attack/Defense trackers with +/- buttons.
- Bonus: responsive breakpoints (2 cards/row at 900px, 1 at 580px).
- Bonus: card content bottom-aligned.
- Bonus: remove-character "×" button on each card.

**Stack:** Vite + React 19 + TypeScript, scaffolded with `create-vite`.
`pnpm` as the package manager. CSS Modules for component-scoped styling.
Vitest + React Testing Library for tests.

**Architecture:** Presentational components (`GlobalActions`, `CardGrid`,
`Card`, `StatRow`) are kept free of state — all roster state (the
character list, and adding/removing/attacking/adjusting stats) lives in
a single `useCharacters` hook and is passed down as props. With one
shared piece of state and two consumers (`GlobalActions` and the card
list), a hook was enough — no Redux or Context needed.

**Testing:** unit tests for `useCharacters`, component tests for each
presentational component, and a couple of integration tests through
`App` for the main user flows (add, attack all, adjust a stat).

See `README.md` for the original exercise spec.

## Requirements

- Node.js 20+
- [pnpm](https://pnpm.io/) (`corepack enable` or `npm install -g pnpm`)

## Install

```sh
pnpm install
```

## Develop

```sh
pnpm dev
```

Starts the Vite dev server at **http://localhost:5173** (with hot module
reload). If 5173 is taken, Vite automatically picks the next free port
(5174, 5175, …) and prints the actual URL to use. To force a specific
port: `pnpm dev --port 3000`.

## Build

```sh
pnpm build
```

Type-checks (`tsc -b`) and produces a production build in `dist/`.

## Preview a production build

```sh
pnpm preview
```

Serves the `dist/` build at **http://localhost:4173** (same
auto-increment/`--port` behavior as `dev`).

## Lint

```sh
pnpm lint
```

## Test

```sh
pnpm test         # run once (CI mode)
pnpm test:watch   # watch mode
```

Vitest + React Testing Library. Covers the `useCharacters` state hook
(unit) and key user flows through `App` (integration): incrementing a
stat, adding a character, attacking all characters.
