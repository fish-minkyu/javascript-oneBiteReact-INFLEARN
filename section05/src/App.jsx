import "./App.css";
import { useState } from "react";

function App() {
    // 배열의 첫번째 요소는 새롭게 생성된 state의 값이다.
    // 두번째 요소는 함수인데 state값을 변화시키는 함수가 들어있다.
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (
        <>
            <div>
                <h1>{light}</h1>
                <button
                    onClick={() => {
                        setLight(light === "ON" ? "OFF" : "ON");
                    }}
                >
                    {light === "ON" ? "끄기" : "켜기"}
                </button>
            </div>
            <div>
                <h1>{count}</h1>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
                </button>
            </div>
        </>
    );
}

export default App;
