import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Unicafe from './unicafe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Unicafe />
  </StrictMode>
)
