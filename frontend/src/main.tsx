import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/globals.css"
import "./styles/dashboard.css"
import "./styles/layout.css"
import "./styles/input.css"
import "./styles/result.css"
import "./styles/history.css"
import "./styles/statsbar.css"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
