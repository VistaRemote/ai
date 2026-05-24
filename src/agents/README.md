# LangGraph agents (P2)

Node/TS orchestration for multi-step AI flows:

- `report.process_optimization` — aggregate behavior → retrieve SOP from Qdrant → LLM draft → human approval in Admin
- `report.efficiency_weekly` — SQL aggregates + LLM narrative

Use **@langchain/langgraph** with **Ollama** (private `AI_BASE_URL`). Do not call public OpenAI by default.

See `spec/ai-platform-spec.md` §1.2 and §3.1.
