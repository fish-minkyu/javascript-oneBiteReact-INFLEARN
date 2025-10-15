import "./App.css";
import Viewr from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // useEffect의 인자 1. 콜백 함수, 2. 배열
    // 두 번째 인수로 전달한 이 배열에 들어가 있는 값이 바뀌게 되면
    // SideEffect로서 첫 번째 인수로 전달한 이 콜백 함수를 실행시켜준다.

    // useEffect는 2번째 인자인 배열에 무엇을 넣는냐에 따라 동작이 달라지므로
    // 2번째 인자, 배열을 의존성 배열(dependency array)라고 부른다.
    // 줄여선 deps라고 부른다.
    useEffect(() => {
        console.log(`count: ${count} / input: ${input}`);
    }, [count, input]);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value)
                }}/>
            </section>
            <section>
                <Viewr count={count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
