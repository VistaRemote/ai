import { expect, test } from '@rstest/core';
import { createWorkerApp } from './worker-app';

test('createWorkerApp exposes start', () => {
  const app = createWorkerApp();
  expect(typeof app.start).toBe('function');
});
