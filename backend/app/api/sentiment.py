from fastapi import APIRouter, HTTPException

from app.schemas.sentiment import (AnalyzeRequest, SentimentResult)
from app.services.sentiment import analyze_sentiment


router = APIRouter()

@router.post("/analyze", response_model=SentimentResult)
async def analyze(body: AnalyzeRequest) -> SentimentResult:
    try:
        return await analyze_sentiment(body.text)

    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Error interno: {exc}"
        ) from exc