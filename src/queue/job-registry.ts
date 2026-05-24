import { AiJobType, type AiJobEnvelope } from '@vistaremote/shared';
import type { LlmClient } from '../llm/llm.client';
import { processCloudInfer } from './processors/cloud-infer.processor';

export async function dispatchJob(
  job: AiJobEnvelope,
  llm: LlmClient,
): Promise<unknown> {
  switch (job.type) {
    case AiJobType.BEHAVIOR_CLOUD_INFER:
      return processCloudInfer(
        job.payload as import('@vistaremote/shared').CloudInferJobPayload,
        llm,
      );
    case AiJobType.RECORDING_SUMMARIZE:
      return { status: 'pending', message: 'recording.summarize not implemented' };
    case AiJobType.REPORT_EFFICIENCY_WEEKLY:
      return { status: 'pending', message: 'efficiency report not implemented' };
    default:
      return { status: 'skipped', type: job.type };
  }
}
