import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
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

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
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
                    return <TodoItem key={todo.id} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;
