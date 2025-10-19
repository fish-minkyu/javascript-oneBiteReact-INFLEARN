import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
    const nav = useNavigate();
    const onClickButton = () => {
        nav("/new");
    };

    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            {/* 1. Routes 컴포넌트 안에 Route 컴포넌트만 들어갈 수 있다. */}
            {/* 2. Routes 컴포넌트 바깥에 배치된 요소들은 페이지 라우팅과는 관련 없이, 모든 페이지에 다 동일하게 렌더링이 된다. */}
            <Routes>
                {/* path란 prop를 통해 위에서 아래로 순차적으로 경로를 확인하고 일치하는 경로가 있으면 해당 요소를 렌더링한다. */}
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary" element={<Diary />} />
                {/* 위에 있는 경로가 모두 아닌 경우 Notfound 페이지를 보여준다. */}
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
