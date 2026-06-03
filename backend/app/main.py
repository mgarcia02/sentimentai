from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import sentiment
from app.core.config import settings


app = FastAPI(
    title="SentimentAI API",
    description="AI-powered sentiment analysis",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    sentiment.router,
    prefix="/api/v1",
    tags=["sentiment"],
)

@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "version": "1.0.0",
    }