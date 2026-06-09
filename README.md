# SentimentAI

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Tech](https://img.shields.io/badge/stack-FastAPI%20%7C%20React%20%7C%20Gemini-blue)

Aplicación full-stack de análisis de sentimientos con Google Gemini. Introduce cualquier texto y obtén un desglose estructurado: sentimiento, score de polaridad, confianza, distribución emocional, palabras clave y un resumen generado por IA.

![Demo](./assets/screenshot.png)


## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React · TypeScript · Vite · Recharts |
| Backend | FastAPI · Pydantic · Uvicorn |
| IA | Google Gemini API |


## Puesta en marcha

### Backend
 
```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```
 
Crea el archivo `backend/.env`:
 
```env
GEMINI_API_KEY=tu_api_key_aquí
```
 
```bash
uvicorn app.main:app --reload
# → http://localhost:8000
# → http://localhost:8000/docs
```
 
### Frontend
 
```bash
cd frontend
npm install
```
 
Crea el archivo `frontend/.env`:
 
```env
VITE_API_URL=http://localhost:8000
```
 
```bash
npm run dev
# → http://localhost:5173
```


## API

### POST `/api/v1/analyze`

**Request**
```json
{
  "text": "Hoy ha sido un día increíble"
}
```

**Response**
```json
{
  "sentiment": "positive",
  "score": 0.91,
  "confidence": 0.97,
  "emotions": {
    "joy": 88,
    "anger": 2,
    "sadness": 1,
    "fear": 3,
    "surprise": 25,
    "disgust": 1
  },
  "keywords": [
    "increíble",
    "día"
  ],
  "summary": "El texto expresa una emoción claramente positiva."
}
```


## Estructura del proyecto

```text
sentimentai/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── clients/
│   │   ├── core/
│   │   ├── prompts/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   └── package.json
│
└── README.md
```


## Funcionalidades
 
- Análisis de sentimiento en tiempo real vía LLM
- Radar emocional interactivo con Recharts
- Historial de análisis previos
- Atajo de teclado: `Ctrl + Enter` para analizar
- Tipado completo — Pydantic en el backend, TypeScript en el fronten
