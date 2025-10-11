import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 자바스크립트 표현식이란?: 한 줄의 코드가 특정한 값으로 평가될 수 있는 식이다.
// Ex. 삼항 연산자, 값, 변수명

// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// Ex. true, undefined, null, 객체 자체는 화면에 렌더링이 되지 않는다.

// 3. 모든 태그는 닫혀 있어야 한다.

// 4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: false,
    };

    // 삼항 연산자 방식
    // return (
    //     <>
    //     {user.isLogin ? <div>로그아웃</div> : <div>로그아웃</div>}
    //     </>
    // );

    // 조건문 방식
    if (user.isLogin) {
        // 스타일 설정하는 방법
        // 1. 직접 요소에 스타일을 지정하는 방법 (객체를 값으로 전달한다.)
        return (
            <div
                style={{
                    backgroundColor: "red",
                    borderBottom: "5px solid blue",
                }}
            >
                로그아웃
            </div>
        );
    } else {
        // 2. 별도의 CSS파일을 만들어 적용하는 방법
        return <div className="logout">로그인</div>;
    }
};

export default Main;
