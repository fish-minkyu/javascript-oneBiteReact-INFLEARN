import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot
// : 인수로 전달받는 html의 요소를 React의 뿌리로 만들어주는 역할이다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    /* App이란 컴포넌트를 렌더링하겠다. */
    <App />
  </StrictMode>,
)
