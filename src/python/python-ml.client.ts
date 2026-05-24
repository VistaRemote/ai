export interface BaselineTrainInput {
  orgId: string;
  userId: string;
  featureVectors: number[][];
}

export interface BaselineTrainResult {
  status: string;
  message: string;
}

/** HTTP client for ai/python-worker (heavy ML only). */
export class PythonMlClient {
  constructor(private readonly baseUrl: string) {}

  async health(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl.replace(/\/$/, '')}/health`);
      return res.ok;
    } catch {
      return false;
    }
  }

  async trainBaseline(input: BaselineTrainInput): Promise<BaselineTrainResult> {
    const res = await fetch(`${this.baseUrl.replace(/\/$/, '')}/v1/ml/baseline/train`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orgId: input.orgId,
        userId: input.userId,
        featureVectors: input.featureVectors,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`python-worker ${res.status}: ${text}`);
    }
    return (await res.json()) as BaselineTrainResult;
  }
}
