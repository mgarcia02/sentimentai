export const MAX_HISTORY = 10;

export const SENTIMENT_CONFIG = {
  positive: { color: "#00e5a0", label: "Positivo", bg: "rgba(0,229,160,0.12)" },
  negative: { color: "#ff4b6e", label: "Negativo", bg: "rgba(255,75,110,0.12)" },
  neutral:  { color: "#a0b4c8", label: "Neutral",  bg: "rgba(160,180,200,0.12)" },
  mixed:    { color: "#f5a623", label: "Mixto",    bg: "rgba(245,166,35,0.12)" },
}

export const EMOTIONS = [
  "joy",
  "anger",
  "sadness",
  "fear",
  "surprise",
  "disgust",
] as const

export const EMOTION_COLORS = {
  joy:      "#00e5a0",
  anger:    "#ff4b6e",
  sadness:  "#6e8efb",
  fear:     "#f5a623",
  surprise: "#c084fc",
  disgust:  "#fb923c",
}

export const EMOTION_LABELS = {
  joy: "Alegría",
  anger: "Enojo",
  sadness: "Tristeza",
  fear: "Miedo",
  surprise: "Sorpresa",
  disgust: "Disgusto",
}