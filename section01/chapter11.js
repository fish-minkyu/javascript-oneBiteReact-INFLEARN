// 함수선언
// : 함수를 새롭게 만드는 행위.
// 함수가 호출 되었을 때, 어떤 코드들을 실행시킬지 미리 준비해두는 작업이다.
function greeting() {
    console.log("안녕하세요!");
}

// 함수 호출
// : 호출 시, 반드시 소괄호와 함께 호출해야 한다.

// 함수를 호출하게 되면 실행 흐름이 함수 내부로 흘러 들어간다.
greeting();

// 인수
// : 함수를 호출하면서 함수에게 전달한 이 값들을 인수라고 부른다.

// 매개변수
// : 전달된 인수들을 순서대로 저장하는 함수의 특수한 변수들을 매개변수라고 부른다.
// 매개체 역할을 하는 변수다.

// 직사각형의 넓이를 구하는 함수
function getArea(width, height) {
    let area = width * height;

    // console.log(area);
    return area;
}

let area1 = getArea(10, 20);
console.log(area1); // 200

let area2 = getArea(30, 20);
console.log(area2); // 600

// 중첩 함수
// : 함수 내부에 또 다른 함수를 만들 수 있다.
function getArea1(width, height) {
    function another() {
        console.log("another");
    }

    another();

    return width * height;
}

// 호이스팅
// : 자바스크립트는 함수의 선언을 함수의 호출보다 아래에 두어도 아무 문제없이 잘 수행된다.
// 바로 자바스크립트의 호이스팅 때문이다.
// 호이스팅이란, 우리말로 끌어올리다란 뜻을 가지고 있다.
// 그래서, 자바스크립트에서는 코드의 아래에 작성된 선언문들을 코드가 실행하기 전에
// 최상단으로 끌어 올려서 실행시켜주는 기능을 말한다.