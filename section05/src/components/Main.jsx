// 컴포넌트에서 css 파일을 불러올 땐, import 뒤에 파일 경로만 입력하면 알아서 불러와진다.
// (React에서 제공하는 기능이다.)
import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 JavaScript 표현식만 넣을 수 있다.
// Cf. JavaScript 표현식이란? 
// : 삼항 연산자나 변수의 이름처럼 한 줄의 코드가 특정한 값으로 평가될 수 있는 식을 말한다.
// 그래서 조건문, 반복문은 한 줄로서 값으로 평가할 수 없기 때문이다.

// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// +) 객체를 렌더링하면 화면이 백지가 된다. 즉, 객체는 렌더링 할 수 없다.

// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
// Cf) 최상위 태그란?
// : 리턴문의 소괄호 안에서 가장 높은 위치에 있는 메인 태그 같은 것을 의미한다.
// +) 만약 최상위 태그로 묶어둘만한 마땅한 태그가 없다면 빈 태그로 묶어줘도 된다. <></>
// 그렇게 된다면 JSX 문법 상에서는 최상위 태그가 있다고 판단하지만
// 실제로 렌더링이 될 때에는 최상위 태그가 없는 것처럼 렌더링이 된다.
// 즉, 태그들이 흩뿌려져 렌더링이 된다.
const Main = () => {
    const user = {
        name: "어민규",
        isLogin: true,
    };

    if (user.isLogin) {
        // CSS 설정방법 1
        // : 해당 요서에 직접 style 속성을 지정해주기.
        // CSS 설정 시, JSX에서는 CSS에서 하는 것처럼 background-color 이런 식으로 설정하면 안된다.
        // 카멜 케이스로 사용해야 한다.
        // 또한 값은 문자열로 적어줘야 한다.
        return <div style={{
            backgroundColor: "red",
            borderBottom: "5px solid blue"
        }}>로그아웃</div>;
    } else {
        // CSS 설정방법 2
        // : CSS 파일을 모듈로서 불러오기.
        // Cf) HTML에선 class란 속성명을 사용했지만 JavaScript에선 class란 예약어가 있으므로 className을 쓴다.
        return <div className="logout">로그인</div>;
    }

    // return (
    //    <>{user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}</>
    // );
};

export default Main;