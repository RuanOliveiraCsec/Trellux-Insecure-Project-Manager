import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/Reset.css'
import './css/Global.css'
import TopoDaPagina from './components/TopoDaPagina.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopoDaPagina />
  </StrictMode>
)
