import { expect, test } from '@rstest/core';
import { LlmClient } from './llm.client';

test('LlmClient is constructible', () => {
  const client = new LlmClient({
    port: 4000,
    redisUrl: 'redis://localhost:6379',
    aiBaseUrl: 'http://localhost:11434/v1',
    aiModel: 'llama3.2',
    serverInternalUrl: 'http://localhost:3000',
    serverInternalHmacSecret: 'test',
  });
  expect(client).toBeTruthy();
});
