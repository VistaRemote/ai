export function loadEnv() {
  return {
    port: Number(process.env.PORT ?? 4000),
    redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379',
    /** Self-hosted LLM (Ollama / vLLM). No public OpenAI by default. */
    aiBaseUrl: process.env.AI_BASE_URL ?? 'http://localhost:11434/v1',
    aiModel: process.env.AI_MODEL ?? 'llama3.2',
    vectorDbUrl: process.env.VECTOR_DB_URL ?? 'http://localhost:6333',
    pythonMlUrl: process.env.PYTHON_ML_URL ?? 'http://localhost:4100',
    serverInternalUrl: process.env.SERVER_INTERNAL_URL ?? 'http://localhost:3000',
    serverInternalHmacSecret:
      process.env.SERVER_INTERNAL_HMAC_SECRET ?? 'dev-secret',
  };
}

export type AppEnv = ReturnType<typeof loadEnv>;
