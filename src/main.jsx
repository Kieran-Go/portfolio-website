import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/normalize.css'
import './css/global.css'
import App from './components/App'
import { DarkModeProvider } from './contexts/darkModeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
)