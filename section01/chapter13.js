// 콜백 함수
// : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미한다.

// +) 콜백
// : 콜백이란 프로그래밍에서 뒷전에 실행되는 or 나중에 실행되는 뜻으로 사용되어 진다.

// cf) 콜백 함수를 인자로 받는 함수는 콜백 함수를 원하는 시점에 호출할 수 있다.

function main1(value) {
    console.log(value);
}

function main2(value) {
    value();
}

function sub() {
    console.log("I am sub");
}

main1(sub); // sub 함수 자체를 출력, 즉 value 매개변수에는 sub함수가 담겨져 있는 걸 알 수 있다.
main2(sub); // I am sub 가 출력, sub와 같은 함수를 콜백 함수라고 부른다.

// 인자를 "함수 표현식"으로 넣어서 써도 된다.
// 이렇게 익명 함수로 넣어도 전혀 문제가 되지 않는다.
main2(function sub() {
    console.log("I am sub");
});

// 화살표 함수 자체로도 인수로 전달할 수 있다.
main2(() => {
    console.log("I am sub");
});


// 2. 콜백함수의 활용
// : 콜백함수를 이용하면 중복 코드들을 줄일 수 있다.
function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
    }
)
// 1, 2, 3, 4, 5

repeat(5, function (idx) {
    console.log(idx * 2);
    }
)
// 2, 4, 6, 8, 10

repeat(5, idx => console.log(idx * 3))
// 3, 6, 9, 12, 15