import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// RTL's automatic afterEach cleanup only self-registers when it detects
// Jest-style test globals, which aren't enabled here (explicit `vitest`
// imports instead) — so it's wired up manually.
afterEach(() => {
  cleanup();
});
