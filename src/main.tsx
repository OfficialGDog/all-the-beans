import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@carbon/styles/css/styles.min.css';
import CoffeeApp from './CoffeeApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeeApp />
  </StrictMode>,
)
