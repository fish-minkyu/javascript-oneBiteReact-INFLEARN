import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                onChange={onChangeCheckBox}
                readOnly
                type="checkbox"
                checked={isDone}
            />
            <div className="content">{content}</div>
            <div className="Date">{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트(Highher Order Component, HOC)
// : 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화 or 메모이제이션 같은 추가적인 기능을 덧붙여서
// 기능이 추가된 새로운 컴포넌트를 반환해주는 메서드를 고차 컴포넌트라고 한다.
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true;
// });
// 왜 이렇게 설정을 해주는걸까?
// 함수도 하나의 객체이기 때문에, onUpdate, onDelete 함수가 매번 새롭게 생성이 된다.
// 따라서, 이 두 함수가 매번 새롭게 생성이 되면서 Props가 바뀌었다고 판단되어서
// 불필요한 리렌더링이 발생할 수 있다.
// 이를 방지하기 위해서, App.jsx에서 useCallback을 사용해서 함수를 메모이제이션 해주면 된다.

export default memo(TodoItem);
