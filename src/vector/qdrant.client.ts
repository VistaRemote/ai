/** Minimal Qdrant health check — full LangChain integration in P1. */

export class QdrantClient {
  constructor(private readonly baseUrl: string) {}

  async health(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl.replace(/\/$/, '')}/healthz`);
      return res.ok;
    } catch {
      return false;
    }
  }
}
