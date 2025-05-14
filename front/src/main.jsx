import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/Reset.css'
import './css/Global.css'
import MenuDaPagina from './components/MenuDaPagina.jsx'
import ContainerDeInscricao from './components/ContainerDeInscricao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MenuDaPagina />
    <ContainerDeInscricao/>
  </StrictMode>
)
