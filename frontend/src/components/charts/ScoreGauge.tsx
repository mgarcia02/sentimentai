export function ScoreGauge({ score } : { score: number }) {
    const pct = ((score + 1) / 2) * 100;
    const color =
        score > 0.2 ? "#00e5a0" : score < -0.2 ? "#ff4b6e" : "#a0b4c8";

    return (
        <div style={{ textAlign: "center" }}>
            <svg width="120" height="70" viewBox="0 0 120 70">
                <path
                    d="M10 60 A50 50 0 0 1 110 60"
                    fill="none" stroke="#1a2535" strokeWidth="10" strokeLinecap="round"
                />
                <path
                    d="M10 60 A50 50 0 0 1 110 60"
                    fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={`${pct * 1.571} 157.1`}
                    style={{ transition: "stroke-dasharray 0.8s cubic-bezier(.4,0,.2,1), stroke 0.5s" }}
                />
                <text
                    x="60" y="58" textAnchor="middle" fill={color}
                    style={{ fontSize: 22, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}
                >
                    {score > 0 ? "+" : ""}{score.toFixed(2)}
                </text>
            </svg>
            <div style={{ fontSize: 11, color: "#4a6080", marginTop: 2, fontFamily: "'DM Mono', monospace", letterSpacing: 2 }}>
                SCORE DE SENTIMIENTO
            </div>
        </div>
    )
}