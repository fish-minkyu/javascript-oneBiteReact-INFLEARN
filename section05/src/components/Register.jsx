import {useState} from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setcountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onchangeCountry = (e) => {
        setcountry(e.target.value);
    }

    const onchangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
    <div>
        <div>
            <input
            value={name}
            onChange={onChangeName} 
            placeholder={"이름"} />
        </div>

        <div>
            <input value={birth} 
            onChange={onChangeBirth} 
            type="date" />
        </div>

        <div>
            <select value={country} onChange={onchangeCountry}>
                <option></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="us">영국</option>
            </select>
        </div>

        <div>
            <textarea value={bio} onChange={onchangeBio} />
        </div>
    </div>
    );
};

export default Register;