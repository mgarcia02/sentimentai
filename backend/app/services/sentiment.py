from app.clients.gemini import generate_structured_content

from app.prompts.sentiment import (SYSTEM_PROMPT, build_sentiment_prompt)
from app.schemas.sentiment import SentimentResult


async def analyze_sentiment(text: str) -> SentimentResult:
    prompt = build_sentiment_prompt(text)

    return generate_structured_content(
        prompt=prompt,
        system_instruction=SYSTEM_PROMPT,
        response_schema=SentimentResult
    )