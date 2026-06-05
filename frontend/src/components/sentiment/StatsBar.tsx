import type { StatsBarProps } from "../../types/sentiment";

export function StatsBar({total, positive, negative, avgScore}: StatsBarProps) {

    const stats = [
        {
            label: "ANÁLISIS",
            value: total,
        },
        {
            label: "SCORE PROMEDIO",
            value:
                avgScore !== null
                    ? `${avgScore > 0 ? "+" : ""}${avgScore.toFixed(2)}`
                    : "—",
        },
        {
            label: "POSITIVOS",
            value: positive
        },
        {
            label: "NEGATIVOS",
            value: negative
        },
    ];

    return (
        <div className="stats-bar">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="stats-bar__card"
                >
                    <div className="stats-bar__label">
                        {stat.label}
                    </div>

                    <div className="stats-bar__value">
                        {stat.value}
                    </div>
                </div>
            ))}
        </div>
    );
}