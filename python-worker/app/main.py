"""VistaRemote ML microservice — heavy Python-only workloads.

Called by ai (Node) over internal HTTP, not by server directly.
"""

from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="VistaRemote Python ML Worker", version="0.1.0")


class BaselineTrainRequest(BaseModel):
    org_id: str = Field(alias="orgId")
    user_id: str = Field(alias="userId")
    feature_vectors: list[list[float]] = Field(default_factory=list)


class BaselineTrainResponse(BaseModel):
    status: str
    message: str


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "python-worker"}


@app.post("/v1/ml/baseline/train", response_model=BaselineTrainResponse)
def train_baseline(body: BaselineTrainRequest) -> BaselineTrainResponse:
    # Placeholder: wire scikit-learn IsolationForest / rolling stats in B4.
    n = len(body.feature_vectors)
    return BaselineTrainResponse(
        status="accepted",
        message=f"baseline train queued for user={body.user_id} samples={n}",
    )


@app.post("/v1/ml/anomaly/scan")
def scan_anomaly() -> dict[str, str]:
    return {"status": "accepted", "message": "anomaly scan placeholder"}
