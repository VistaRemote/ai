import type { CloudInferJobPayload } from '@vistaremote/shared';
import type { LlmClient } from '../../llm/llm.client';

/** Re-run edge-failed inference on cloud (rules + optional LLM explain). */
export async function processCloudInfer(
  payload: CloudInferJobPayload,
  llm: LlmClient,
): Promise<{ status: string; summary?: string }> {
  const ids = payload.inferenceIds.join(', ');
  const summary = await llm.summarizeBehaviorTimeline(
    `Cloud infer (${payload.reason}) for events: ${ids}`,
  );
  return { status: 'completed', summary };
}
