import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useEffect } from "react";
import { useState } from "react";

function reducer(state, action) {
    let nextState;

    switch (action.type) {
        case "INIT":
            return action.data;
        case "CREATE":
            {
                nextState = [action.data, ...state];
            }
            break;
        case "UPDATE":
            {
                nextState = state.map((item) =>
                    String(item.id) === String(action.data.id)
                        ? action.data
                        : item
                );
            }
            break;
        case "DELETE":
            {
                nextState = state.filter(
                    (item) => String(item.id) !== String(action.id)
                );
            }
            break;
        default:
            return state;
    }

    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef();

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        // storedData에 데이터가 없어 undefined인 경우
        if (!storedData) {
            setIsLoading(false);
            return;
        }

        const parsedData = JSON.parse(storedData);

        // parsedData가 배열이 아닌 경우
        if (!Array.isArray(parsedData)) {
            setIsLoading(false);
            return;
        }

        let maxId = 0;
        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        });

        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedData,
        });
        setIsLoading(false);
    }, []);

    // 새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    // 기존 일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    if (isLoading) {
        return <div>데이터 로딩중입니다 ...</div>;
    }

    return (
        <>
            {/* 1. Routes 컴포넌트 안에 Route 컴포넌트만 들어갈 수 있다. */}
            {/* 2. Routes 컴포넌트 바깥에 배치된 요소들은 페이지 라우팅과는 관련 없이, 모든 페이지에 다 동일하게 렌더링이 된다. */}
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{
                        onCreate,
                        onUpdate,
                        onDelete,
                    }}
                >
                    <Routes>
                        {/* path란 prop를 통해 위에서 아래로 순차적으로 경로를 확인하고 일치하는 경로가 있으면 해당 요소를 렌더링한다. */}
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        {/* 위에 있는 경로가 모두 아닌 경우 Notfound 페이지를 보여준다. */}
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
