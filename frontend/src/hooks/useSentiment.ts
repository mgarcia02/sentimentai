import { useCallback, useMemo, useState } from "react"

import { analyzeSentiment } from "../services/sentiment"
import { MAX_HISTORY } from "../constants/sentiment"
import type { HistoryEntry, SentimentResult } from "../types/sentiment"


export function useSentiment() {
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [history, setHistory] = useState<HistoryEntry[]>([])
    const [selected, setSelected] = useState<HistoryEntry | null>(null)

    const analyze = useCallback(async () => {
        if (!text.trim() || loading) return

        setLoading(true)
        setError(null)

        try {
            const result: SentimentResult = await analyzeSentiment(text)
            const entry: HistoryEntry = {text, result, ts: Date.now()}

            setSelected(entry)
            setHistory((prev) => [entry, ...prev].slice(0, MAX_HISTORY))
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unexpected error"

            setError(message)
        } finally {
            setLoading(false)
        }
    }, [text, loading])

    const selectEntry = useCallback((entry: HistoryEntry) => {
        setSelected(entry)
    }, [])

    const clearHistory = useCallback(() => {
        setHistory([])
        setSelected(null)
    }, [])

    const avgScore = useMemo(() => {
        if (history.length === 0) {
            return null
        }

        const total = history.reduce((acc, item) => acc + item.result.score, 0)

        return total / history.length
    }, [history])

    return {
        text, setText,
        loading, error,
        history, selected,
        avgScore, analyze,
        selectEntry, clearHistory
    }
}