import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    const countRef = useRef(0);
    const inputRef = useRef();

    const onChage = (e) => {
        // useRef 대신 let count = 0; 을 하면 안되나?
        // useRef를 사용하지 않고 일반 JavaScript 변수를 사용한다면
        // onChange 이벤트가 발생할 때마다 Register 컴포넌트 함수가 재실행이 되는
        // 즉, 리렌더링이 되므로 JavaScript 변수도 다시 초기화가 된다.
        countRef.current++;
        console.log(countRef.current);

        setInput({
            // ...input이 없다면 나머지 속성들의 값은 저장이 되지 않는다.
            ...input,
            // e.target.name
            // : 이벤트가 발생한 태그의 name 속성의 값이 들어있다.
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChage}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChage}
                    type="date"
                />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChage}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChage} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;
