SYSTEM_PROMPT = """
You are a sentiment analysis expert.

Analyze text sentiment and emotions.

Return data according to the provided response schema.
"""

def build_sentiment_prompt(text: str) -> str:
    return f"""
Analyze the following text:

{text}
"""