# VistaRemote Python ML Worker

Heavy ML only (baseline training, Isolation Forest, deep time-series). **Not** the main AI entry point.

- **Called by**: `ai` Node worker (`PYTHON_ML_URL`), never directly by `server`
- **Stack**: FastAPI + scikit-learn
- **Deploy**: Docker profile `ai` in `deploy/compose/docker-compose.dev.yml`

```bash
cd ai/python-worker
pip install -r requirements.txt
uvicorn app.main:app --reload --port 4100
```

Normative: Meta-Repo `spec/ai-platform-spec.md` §3.
