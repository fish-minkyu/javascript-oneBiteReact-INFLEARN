import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        // 빈 문자열인 경우 바로 종료
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        onCreate(content);

        // 추가 버튼 클릭 후 input 태그 초기화
        setContent("");
    };

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
