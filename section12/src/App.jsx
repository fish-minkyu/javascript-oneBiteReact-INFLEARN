import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    },
    {
        id: 3,
        createdDate: new Date().getTime(),
        emotionId: 3,
        content: "3번 일기 내용"
    },
]


function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);

    return (
        <>
            {/* 1. Routes 컴포넌트 안에 Route 컴포넌트만 들어갈 수 있다. */}
            {/* 2. Routes 컴포넌트 바깥에 배치된 요소들은 페이지 라우팅과는 관련 없이, 모든 페이지에 다 동일하게 렌더링이 된다. */}
            <Routes>
                {/* path란 prop를 통해 위에서 아래로 순차적으로 경로를 확인하고 일치하는 경로가 있으면 해당 요소를 렌더링한다. */}
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
                {/* 위에 있는 경로가 모두 아닌 경우 Notfound 페이지를 보여준다. */}
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
