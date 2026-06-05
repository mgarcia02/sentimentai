export type AnalyzeRequest = {
    text: string
}

export type EmotionScores = {
    joy: number;
    anger: number;
    sadness: number;
    fear: number;
    surprise: number;
    disgust: number
}

export type SentimentType ="positive" | "negative" | "neutral" | "mixed"

export interface SentimentResult {
    sentiment: SentimentType;
    score: number;
    confidence: number;
    emotions: EmotionScores;
    keywords: string[];
    summary: string
}

export interface HistoryEntry {
    text: string;
    result: SentimentResult;
    ts: number
}

export interface TextInputProps {
    text: string;
    loading: boolean;
    onChange: (value: string) => void;
    onAnalyze: () => void
}

export interface ResultCardProps {
    result: SentimentResult,
    config: {
        color: string;
        label: string;
        bg: string
    }
}

export interface KeywordPillsProps {
    keywords: string[];
    sentiment: SentimentType
}

export interface HistoryCardProps {
    history: HistoryEntry[];
    selected: HistoryEntry | null;
    onSelect: (entry: HistoryEntry) => void;
    onClear: () => void
}

export interface HistoryItemProps {
    item: HistoryEntry;
    index: number;
    isSelected: boolean;
    onSelect: (entry: HistoryEntry) => void;
}

export interface StatsBarProps {
    total: number;
    positive: number;
    negative: number;
    avgScore: number | null
}