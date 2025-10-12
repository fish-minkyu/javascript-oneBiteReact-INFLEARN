import { useState } from "react";

// React 컴포넌트의 리렌더링 트리거
// 1. 자신이 관리하는 state값이 변경되었을 때
// 2. 자신이 받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다.

// Important
// 관련이 없는 2개의 state를 하나의 컴포넌트에 몰아넣는게 아닌
// 서로 다른 컴포넌트로 분리하는 것이 좋다.

// 자식 컴포넌트는 부모로부터 받는 props가 바뀌면 리렌더링 된다.
const Bulb = () => {
    // 배열의 첫번째 요소는 새롭게 생성된 state의 값이다.
    // 두번째 요소는 함수인데 state값을 변화시키는 함수가 들어있다.
    const [light, setLight] = useState("OFF");

    return (
        <div>
            {light === "ON" ? (
                <h1 style={{ backgroundColor: "orange" }}>ON</h1>
            ) : (
                <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
            )}

            <button
                onClick={() => {
                    setLight(light === "ON" ? "OFF" : "ON");
                }}
            >
                {light === "ON" ? "끄기" : "켜기"}
            </button>
        </div>
    );
};

export default Bulb;
