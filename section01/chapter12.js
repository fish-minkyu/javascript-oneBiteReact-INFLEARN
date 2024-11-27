// 1. 함수 표현식

// 익명 함수(= 함수 표현식)
// : 익명 함수는 이름이 없는 함수다.
// 또한, 함수 선언식이 아니다. 함수 선언식은 어떤 변수의 값으로써 담기지 않은 상태로 유지가 되어야 한다.
// 마지막으로 호이스팅이 되지 않는다.
// 콜백 함수에서 자주 사용이 된다.
let barB = function funcB() {
    console.log("funcB");
}

varB();
funcB(); // 오류 발생!

// 함수 선언
function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력된다. javascript는 함수 자체를 하나의 값으로 생각한다.
varA(); // funcA 호출


// 2. 화살표 함수
// : 함수를 더 빠르고 간결하게 생성하도록 도와주는 Javascript 문법이다.
let varC = () => {
    return 1;
}
console.log(varC); // 1

// 반환문이 1줄일 때, 중괄호 생략 가능
let varD = () => 1;

// 소괄호 안에 매개변수를 넣을 수 있다.
let varE = (value) => value + 1;
console.log(varE(10)); // 11

// 1줄이 아닌 복수의 줄이 필요할 경우
let varF = (value) => {
    console.log(value);
    return value + 1;
}