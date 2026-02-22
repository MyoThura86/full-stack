import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Anecdot from './anecdotes.jsx'
import Unicafe from './unicafe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Anecdot />
    <Unicafe />
  </StrictMode>
)

