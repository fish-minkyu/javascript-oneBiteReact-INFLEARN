// 1. 상수 객체
//: 상수에 저장한 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 오류
// animal = { a: 1 };

// 상수는 엄밀히 말하자면 새로운 값을 할당하지 못하는 변수를 의미한다.
// 추가, 수정, 삭제 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말한다.
const person = {
    name: "어민규",
    sayHi: function () {
        console.log("안녕");
    },
    // 메서드 선언
    sayHello() {
        console.log("안녕");
    },
};

person.sayHi();
person.sayHello();
person["sayHi"]();
