import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot
// : 인수로 전달받은 HTML 요소를 리액트의 루트로, 즉 뿌리로 만들어주는 역할을 한다.
createRoot(document.getElementById('root')).render(
  // StrictMode는 무시해도 된다.
  <StrictMode>
    {/* html 태그를 쓰듯이 <App />이라고 써놓은 것은
        컴포넌트를 렌더링하는 문법이다. */}
    <App />
  </StrictMode>,
)
