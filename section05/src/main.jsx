import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 관례상 대부분 react개발자들은 root 컴포넌트의 이름은 App으로 설정한다.
createRoot(document.getElementById('root')).render(
    <App />
)
