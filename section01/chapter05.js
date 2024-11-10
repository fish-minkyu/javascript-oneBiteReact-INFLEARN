// 1. Number Type
// : 사칙연산을 지원한다.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // %는 모듈러 연산자라고 부른다.

// 무한대
let inf = Infinity;
let mInf = -Infinity;

// NaN
let nan = NaN; // Not a Number, 수칙연산이 실패되었을 때 결과값으로 사용한다.
console.log(1 * "Hello"); // NaN


// 2. String Type
let myName = "어민규 ";
let myLocation = "하계동";
let introduce = myName + myLocation;

console.log(introduce);

// 템플릿 리터럴 문법
// 백틱
// : 문자열 안에 변수를 동적으로 넣을 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;


// 3. Boolean Type
// : True or False, 어떠한 상태를 나타내는데 주로 사용된다.
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다.)
let empty = null;


// 5. Undefined Type
// : 변수를 선언하고 어떠한 값도 할당하지 않았을 때, 자동 설정되는 값이다.
undefined
let none;
console.log(none);

// Null vs Undefined
// : Undefined는 값을 아무것도 할당하지 않았을 때 발생하는 값이다.
// 즉, Undefined란 값은 이 변수를 미처 초기화하지 못했거나 아니면 존재하지 않는 값을 불러온다고 할 때 발생한다.
// : Null은 null값을 할당해줘야 한다.
// 즉, 개발자가 어떠한 값도 없다라는 걸 의미한다.
