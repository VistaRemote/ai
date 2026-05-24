import { describe, expect, it } from '@rstest/core';
import { PythonMlClient } from './python-ml.client';

describe('PythonMlClient', () => {
  it('health returns false when worker is down', async () => {
    const client = new PythonMlClient('http://127.0.0.1:1');
    await expect(client.health()).resolves.toBe(false);
  });
});
