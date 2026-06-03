# 📘 SentimentAI

Proyecto full‑stack para análisis de sentimiento utilizando FastAPI en el backend y un frontend (aún en desarrollo).
El backend usa Gemini para procesar texto y devolver un análisis estructurado.

## 🚀 Tecnologías

**Backend**

- FastAPI
- Uvicorn
- Google Gemini (google‑genai)
- Pydantic
- Pydantic Settings
- python‑dotenv

**Frontend** (Vacío por ahora)

## 📂 Estructura del proyecto

```
sentimentai/
│
├── backend/
│   ├── app/
│   └── requirements.txt
│
├── frontend/   (vacío por ahora)
│
└── README.md   ← este archivo
```

## ▶️ Cómo ejecutar el backend

Ir a la carpeta del backend:
```
cd backend
```

Crear y activar el entorno virtual:
```
python3 -m venv .venv
source .venv/bin/activate
```

Instalar dependencias:
```
pip install -r requirements.txt
```

Ejecutar el servidor:
```
uvicorn app.main:app --reload
```

El backend estará disponible en:
```
http://127.0.0.1:8000
```

Documentación interactiva:
```
http://127.0.0.1:8000/docs
```

## 🔑 Variables de entorno

Crear un archivo .env dentro de backend/:
```
GEMINI_API_KEY=tu_api_key
```