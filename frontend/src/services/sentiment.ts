import type { AnalyzeRequest, SentimentResult } from "../types/sentiment"

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000"


export async function analyzeSentiment(text: string): Promise<SentimentResult> {
    const payload: AnalyzeRequest = {text}

    const response = await fetch(`${API_URL}/api/v1/analyze`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        },
    )

    if (!response.ok) {
        const error = await response.json().catch(() => null)

        throw new Error(error?.detail ?? `Request failed (${response.status})`)
    }

    return response.json()
}