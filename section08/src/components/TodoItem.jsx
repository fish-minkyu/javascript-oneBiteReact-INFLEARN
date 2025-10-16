import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
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
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;
