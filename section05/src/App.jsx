import './App.css';
import { useState } from 'react';

// 함수 컴포넌트
// : 함수로 만든 컴포넌트
// "함수 이름" 컴포넌트라고 부른다.

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          +
        </button>
    </div>

    </>
  );
};

export default App;
// 모든 컴포넌트들의 조상 역할을 하는 App 컴포넌트를 
// 특별히 모든 컴포넌트들의 뿌리 역할을 한다고 해서 root 컴포넌트라고 부른다.