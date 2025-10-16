import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
    // 검색 기능
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // 1. 콜백함수: useMemo는 콜백 함수의 반환값을 그대로 반환한다.
    // 2. 의존성 배열: deps
    // : deps를 기준으로 메모이제이션을 한다.
    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return { totalCount, doneCount, notDoneCount };
    }, [todos]);

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    // 리스트로 형태로 렌더링 or 컴포넌트를 구분할 때
                    // 각각의 요소를 key란 prop으로 구분하게 된다.
                    // 그러므로 모든 컴포넌트에게 key란 prop을 고유한 값으로 전달해야 한다.
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;
