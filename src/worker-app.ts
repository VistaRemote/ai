import { loadEnv } from './config/env';
import { LlmClient } from './llm/llm.client';
import { dispatchJob } from './queue/job-registry';

export interface WorkerApp {
  start(): void;
  stop(): void;
}

export function createWorkerApp(): WorkerApp {
  const env = loadEnv();
  const llm = new LlmClient(env);
  return {
    start() {
      console.info(
        `[ai] worker ready — LLM ${env.aiBaseUrl} model=${env.aiModel} redis=${env.redisUrl}`,
      );
      console.info(
        '[ai] BullMQ consumer: wire Redis queue in next sprint (dispatchJob ready)',
      );
      // Dev smoke: uncomment to test Ollama when stack is up
      // void dispatchJob(
      //   {
      //     jobId: 'dev-1',
      //     type: 'behavior.cloud_infer',
      //     orgId: 'org-dev',
      //     createdAt: Date.now(),
      //     payload: { inferenceIds: ['e1'], reason: 'timeout' },
      //   } as never,
      //   llm,
      // ).then(console.log);
      void llm;
      void dispatchJob;
    },
    stop() {},
  };
}
