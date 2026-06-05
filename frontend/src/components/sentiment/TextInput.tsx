import type { TextInputProps } from "../../types/sentiment"

export function TextInput({ text, loading, onChange, onAnalyze }: TextInputProps) {
    const disabled = !text.trim() || loading

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !disabled) {
            onAnalyze()
            e.preventDefault()
        }
    }

    return (
        <div className="sentiment-input">
            <textarea
                value={text}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown} 
                placeholder="Escribe o pega cualquier texto aquí para analizar su sentimiento..."
                rows={6}
                className="sentiment-input__textarea"
            />

            <div className="sentiment-input__footer">
                <span className="sentiment-input__info">
                    {text.length} caracteres · Ctrl+Enter para analizar
                </span>
                <button onClick={onAnalyze} disabled={disabled} className="sentiment-input__button">
                    {loading ? "Analizando..." : "✦ Analizar"}
                </button>
            </div>
        </div>
    )
}