import { EMOTIONS, EMOTION_COLORS, EMOTION_LABELS } from "../../constants/sentiment"
import type { EmotionScores } from "../../types/sentiment"

export function EmotionBars({ emotions }: { emotions: EmotionScores } ) {
    return (
        <div className="result-card__bars-container">
            {EMOTIONS.map((key) => {
                const value = emotions[key]
                
                return (
                    <div key={key}>
                        <div className="result-card__bar">
                            <span className="result-card__bar-label">
                                {EMOTION_LABELS[key].toUpperCase()}
                            </span>
                            <span className="result-card__bar-value" style={{ color: EMOTION_COLORS[key] }}>
                                {value}
                            </span>
                        </div>
                        <div className="result-card__bar-background">
                            <div className="result-card__bar-fill" style={{width: `${value}%`, background: EMOTION_COLORS[key] }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
