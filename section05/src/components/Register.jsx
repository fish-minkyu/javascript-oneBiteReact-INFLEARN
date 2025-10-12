import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    // 이름
    const [name, setName] = useState("이름");
    const onChageName = (e) => {
        console.log(e);
        setName(e.target.value);
    };

    // 생년월일
    const [birth, setBirth] = useState("");
    const onChageBirth = (e) => {
        setBirth(e.target.value);
    };

    // 국적
    const [country, setCountry] = useState("");
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    // 자기소개
    const [bio, setBio] = useState("");
    const onChangeBio = (e) => {
        setBio(e.target.value);
    };

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={onChageName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input value={birth} onChange={onChageBirth} type="date" />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio} />
            </div>
        </div>
    );
};

export default Register;
