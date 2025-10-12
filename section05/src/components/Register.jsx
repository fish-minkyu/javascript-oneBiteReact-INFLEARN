import { useState } from "react";

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

    const onChage = (e) => {
        setInput({
            // ...input이 없다면 나머지 속성들의 값은 저장이 되지 않는다.
            ...input,
            // e.target.name
            // : 이벤트가 발생한 태그의 name 속성의 값이 들어있다.
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input
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
        </div>
    );
};

export default Register;
