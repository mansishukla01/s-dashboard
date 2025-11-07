import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles.css'
import App from './App.jsx'
import { StudentProvider } from './context/StudentContext'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <StudentProvider>
        <App />
      </StudentProvider>
    </BrowserRouter>
)
