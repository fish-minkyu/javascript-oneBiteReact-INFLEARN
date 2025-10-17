import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import {
    useState,
    useRef,
    useReducer,
    useCallback,
    createContext,
    useMemo,
} from "react";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "운동하기",
        date: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId
                    ? { ...item, isDone: !item.isDone }
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

// 컨텍스트 객체는 보통 컴포넌트 외부에서 선언하게 된다.
// 컴포넌트 내부에 선언을 하게 되면 해당 컴포넌트가 리렌더링 될 때마다 새로 생성되기 때문이다.
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 생성
    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    }, []);

    // 수정
    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId,
        });
    }, []);

    // 1. 인자
    // : 최적화하고 싶은 함수, 즉 불필요하게 재성되지 않도록 방지하고 싶은 함수
    // 2. deps(의존성 배열)
    // : deps 배열 안에 있는 값이 바뀌었을 때에만 함수를 재생성
    // 빈 배열일 경우에는 컴포넌트가 처음 렌더링 될 때에만 함수가 생성되고, 그 이후로는 계속해서 같은 함수 참조
    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId,
        });
    }, []);

    // App 컴포넌트 마운트 이후로 재생성되지 않도록 설정
    const memoizedDispatch = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
