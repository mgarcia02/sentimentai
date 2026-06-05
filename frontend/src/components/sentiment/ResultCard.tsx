import type { ResultCardProps } from "../../types/sentiment"

import { ScoreGauge } from "../charts/ScoreGauge"
import { KeywordPills } from "./KeywordPills"
import { EmotionRadar } from "../charts/EmotionRadar";
import { EmotionBars } from "./EmotionsBars";

export function ResultCard({ result, config }: ResultCardProps) {
  return (
    <div className="result-card" style={{border: `1px solid ${config.color}33`}}>
      <div className="result-card__header" style={{background: config.bg}}>
        <div>
          <div className="result-card__sentiment">
            <div className="result-card__sentiment-icon" style={{background: config.color, boxShadow: `0 0 12px ${config.color}`}} />
            <span className="result-card__sentiment-label" style={{ color: config.color }}>
              {config.label}
            </span>
            <span className="result-card__sentiment-confidence" style={{ color: config.color + "88" }}>
              {Math.round(result.confidence * 100)}% confianza
            </span>
          </div>
          <p className="result-card__sentiment-summary">
            "{result.summary}"
          </p>
        </div>

        <ScoreGauge score={result.score} />
      </div>

      <div className="result-card__section">
        <div className="result-card__title">PALABRAS CLAVE</div>
        <KeywordPills keywords={result.keywords} sentiment={result.sentiment} />
      </div>

      <div className="result-card__section-grid">
        <div>
          <div className="result-card__title">RADAR EMOCIONAL</div>
          <EmotionRadar emotions={result.emotions} />
        </div>
        <div>
          <div className="result-card__title">INTENSIDAD</div>
          <EmotionBars emotions={result.emotions} />
        </div>
      </div>
      
    </div>
  );
}