from pydantic import BaseModel, Field
from typing import Literal


class AnalyzeRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=5000, description="Texto a analizar")

class EmotionScores(BaseModel):
    joy: float = Field(ge=0, le=100)
    anger: float = Field(ge=0, le=100)
    sadness: float = Field(ge=0, le=100)
    fear: float = Field(ge=0, le=100)
    surprise: float = Field(ge=0, le=100)
    disgust: float = Field(ge=0, le=100)

class SentimentResult(BaseModel):
    sentiment: Literal["positive", "negative", "neutral", "mixed"]
    score: float = Field(ge=-1.0, le=1.0)
    confidence: float = Field(ge=0, le=1)
    emotions: EmotionScores
    keywords: list[str] = Field(min_length=1, max_length=5)
    summary: str