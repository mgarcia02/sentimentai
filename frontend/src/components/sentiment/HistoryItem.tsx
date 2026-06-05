import { SENTIMENT_CONFIG } from "../../constants/sentiment"
import type { HistoryItemProps } from "../../types/sentiment";

export function HistoryItem({ item, index, onSelect, isSelected }: HistoryItemProps) {
    const cfg = SENTIMENT_CONFIG[item.result.sentiment] || SENTIMENT_CONFIG.neutral
    const score = item.result.score

    return (
        <div onClick={() => onSelect(item)}
            className={`history-item ${isSelected ? "history-item--selected" : ""}`}
            style={{
                borderColor: isSelected ? `${cfg.color}66` : "#1a2535",
                background: isSelected ? cfg.bg : "transparent",
            }}
        >
            <div className="history-item__header">
                <span className="history-item__index"> #{index + 1} </span>

                <span className="history-item__sentiment" style={{ color: cfg.color }}>
                    {cfg.label} ({score > 0 ? "+" : ""}
                    {score.toFixed(2)})
                </span>
            </div>

            <div className="history-item__text">
                {item.text}
            </div>
        </div>
    )
}