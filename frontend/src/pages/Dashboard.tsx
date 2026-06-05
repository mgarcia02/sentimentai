import { useEffect } from "react"

import { useSentiment } from "../hooks/useSentiment"
import { SENTIMENT_CONFIG } from "../constants/sentiment"

import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { TextInput } from "../components/sentiment/TextInput"
import { ResultCard } from "../components/sentiment/ResultCard"
import { EvolutionChart } from "../components/charts/EvolutionChart"
import { HistoryCard } from "../components/sentiment/HistoryCard"
import { StatsBar } from "../components/sentiment/StatsBar"

export default function Dashboard() {
    const {
        text, setText,
        loading, error,
        history, selected,
        avgScore, analyze,
        selectEntry, clearHistory
    } = useSentiment()

    const positiveCount = history.filter(
        (h) => h.result.sentiment === "positive"
    ).length
    const negativeCount = history.filter(
        (h) => h.result.sentiment === "negative"
    ).length

    const displayResult = selected?.result ?? null
    const cfg = displayResult
        ? (SENTIMENT_CONFIG[displayResult.sentiment] || SENTIMENT_CONFIG.neutral)
        : null;

    useEffect(() => {
        const appRoot = document.getElementById("app-root");

        if (appRoot) appRoot.style.opacity = "1"
    }, [])

    return (
        <div id="app-root" className="dashboard">
            <div className="dashboard__container">
                <Header />
                { history.length > 0 && (
                    <StatsBar total={history.length} positive={positiveCount} negative={negativeCount} avgScore={avgScore} />
                )}

                <div className="dashboard__content">
                    <div className="dashboard__main">
                        <TextInput
                            text={text}
                            loading={loading}
                            onChange={setText}
                            onAnalyze={analyze}
                        />

                        {error && (
                            <p className="dashboard__error">
                                {error}
                            </p>
                        )}

                        {displayResult && cfg && (
                            <ResultCard
                                result={displayResult}
                                config={cfg}
                            />
                        )}

                        {history.length > 1 && (
                            <div className="evolution-card">
                                <div className="evolution-card__title">EVOLUCIÓN DE SENTIMIENTOS</div>
                                <EvolutionChart history={history} />
                            </div>
                        )}

                    </div>
                    <div className="history-card-container">
                        <HistoryCard
                            history={history} 
                            selected={selected} 
                            onSelect={selectEntry} 
                            onClear={clearHistory} 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}