// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 배열
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// 객체
let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

// 함수
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// : 앞에 ...만 붙으면 변수명은 크게 상관이 없다.
// 단, Rest 매개변수 뒤에 추가적인 매개변수를 넣을 수 없다.
function funcB(one, ...rest) {
    // 여기 ...은 소괄호 안에 쓰여졌으므로 spread 연산자가 아닌 rest 매개변수다.
    // rest 매개변수는 배열로 저장이 된다.
    console.log(rest);
}

funcB(...arr1); // [2, 3]