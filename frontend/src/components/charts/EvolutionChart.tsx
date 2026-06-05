import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import type { HistoryEntry } from "../../types/sentiment";

export function EvolutionChart({ history }: { history: HistoryEntry[] }) {
    const data = history.map((h, i) => ({ i: i + 1, score: h.result.score }))

    return (
        <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#6e8efb" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#6e8efb" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="i" hide />
                <YAxis domain={[-1, 1]} hide />
                <Tooltip
                    contentStyle={{
                        background: "#0d1724", border: "1px solid #1e2d42",
                        borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 12,
                    }}
                    formatter={(v) => [(v as number).toFixed(2), "Score"]}
                    labelFormatter={(l) => `Análisis #${l}`}
                />
                <Area
                    type="monotone" dataKey="score"
                    stroke="#6e8efb" strokeWidth={2} fill="url(#scoreGrad)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}