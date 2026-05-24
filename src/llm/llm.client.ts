import type { AppEnv } from '../config/env';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/** Self-hosted LLM via OpenAI-compatible API (Ollama / vLLM). Public SaaS is opt-in only. */
export class LlmClient {
  constructor(private readonly env: AppEnv) {}

  async chat(messages: ChatMessage[]): Promise<string> {
    const url = `${this.env.aiBaseUrl.replace(/\/$/, '')}/chat/completions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: this.env.aiModel,
        messages,
        stream: false,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`LLM ${res.status}: ${text}`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    return json.choices?.[0]?.message?.content?.trim() ?? '';
  }

  async summarizeBehaviorTimeline(timeline: string): Promise<string> {
    return this.chat([
      {
        role: 'system',
        content:
          '你是企业效率分析助手。根据窗口活动摘要生成简短 Markdown，不含臆测的敏感细节。',
      },
      { role: 'user', content: timeline },
    ]);
  }
}
