import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css';
import "./index.css"
import "@fontsource/inter/400.css"; // ✅ REGULAR
import "@fontsource/inter/700.css"; // ✅ B
 // Or /400.css, /700.css, etc.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
