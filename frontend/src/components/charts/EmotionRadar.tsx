import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"

import { EMOTION_LABELS, EMOTIONS } from "../../constants/sentiment"
import type { EmotionScores } from "../../types/sentiment"

export function EmotionRadar({ emotions }: { emotions: EmotionScores }) {
    const data = EMOTIONS.map((key) => ({
        emotion: EMOTION_LABELS[key],
        value: emotions[key],
        fullMark: 100,
    }));

    return (
        <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={data}>
                <PolarGrid stroke="#1e2d42" />
                <PolarAngleAxis
                    dataKey="emotion"
                    tick={{ fill: "#5a7a9a", fontSize: 11, fontFamily: "'DM Mono', monospace" }}
                />
                <Radar
                    dataKey="value"
                    stroke="#6e8efb" fill="#6e8efb"
                    fillOpacity={0.25} strokeWidth={2}
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}