import type { HistoryCardProps } from "../../types/sentiment"
import { HistoryItem } from "./HistoryItem"

export function HistoryCard({ history, selected, onSelect, onClear }: HistoryCardProps) {
    return (
        <div className="history-card">
            <div className="history-card__header">
                <span className="history-card__title">HISTORIAL</span>
                {history.length > 0 && (
                    <button onClick={onClear} className="history-card__clear-btn">
                        limpiar
                    </button>
                )}
            </div>

            <div className="history-card__content">
                {history.length === 0 ? (
                    <div className="history-card__empty">
                        <div className="history-card__empty-icon">
                            ◎
                        </div>

                        <div className="history-card__empty-text">
                            Los análisis
                            <br />
                            aparecerán aquí
                        </div>
                    </div>
                ) : (
                    history.map((item, index) => (
                        <HistoryItem
                            key={item.ts}
                            item={item}
                            index={index}
                            onSelect={onSelect}
                            isSelected={selected?.ts === item.ts}
                        />
                    ))
                )}
            </div>
        </div>
    );
}