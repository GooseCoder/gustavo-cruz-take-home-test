# Setup & Run

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

## Application

A character roster: each card shows a randomized header image and
Health/Attack/Defense counters with +/- controls. "Add Character" appends
a new card (stats at 0, random image); "Attack All Characters" zeroes
every character's Health. Layout is responsive — 3 cards per row down to
2 at 900px and 1 at 580px viewport width.

## Stack notes

- **Vite + React + TypeScript**, scaffolded with `create-vite`.
- **pnpm** as the package manager.

See `README.md` for the original exercise spec.
