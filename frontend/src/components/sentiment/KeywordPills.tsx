import { SENTIMENT_CONFIG } from "../../constants/sentiment"
import type { KeywordPillsProps } from "../../types/sentiment"

export function KeywordPills({ keywords, sentiment } : KeywordPillsProps) {
    const { color } = SENTIMENT_CONFIG[sentiment] || SENTIMENT_CONFIG.neutral

    return (
        <div className="result-card__keywords">
            {keywords.map((kw, i) => (
                <span key={i} className="result-card__keyword" style={{ border: `1px solid ${color}44`, color, background: `${color}11` }}>
                    {kw}
                </span>
            ))}
        </div>
    );
}
