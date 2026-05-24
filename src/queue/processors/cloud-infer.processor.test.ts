import { expect, test } from '@rstest/core';
import type { CloudInferJobPayload } from '@vistaremote/shared';

test('CloudInferJobPayload shape', () => {
  const p: CloudInferJobPayload = {
    inferenceIds: ['a1'],
    reason: 'cpu_pressure',
  };
  expect(p.reason).toBe('cpu_pressure');
});
