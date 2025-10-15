import "./App.css";
import Viewr from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Even from "./components/even";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // 1. 마운트 : 탄생
    // deps가 비어있으므로, 콜백함수가 처음 mount 될 때 이후에는 다시는 실행이 되지 않는다.
    useEffect(() => {
        console.log("mount");
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    // deps를 생략하게 되면, mount 될 때 한번 실행되고
    // 이 컴퍼넌트가 리렌더링 즉, update가 될 때마다 계속 실행이 된다.
    useEffect(() => {
        console.log("update");
    });

    // 만약, 마운트 외에 업데이트 때에만 콜백함수를 실행하고 싶다면
    // 해당 컴포넌트가 마운트가 되었는지 안되었는지를 체크하는 변수를
    // useRef를 이용해서 하나 만들어주면 된다.
    const isMount = useRef(false);
    useEffect(() => {
        // 아직 Mount가 되지 않았다면
        if (!isMount.current) {
            // 이제 Mount가 되었다.
            isMount.current = true;
            return;
        }
        console.log("only update");
    });

    // 3. 언마운트 : 죽음
    // Even 컴포넌트 참고.

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            <section>
                <Viewr count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
