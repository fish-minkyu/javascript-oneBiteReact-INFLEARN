// 1. 대입 연산자(=)
let var1 = 1;


// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 산술 연산자들 중에 곱셈, 나눗셈, 모듈러 연산자가 +, - 보다 우선순위가 높다.
let num6 = 1 + 2 * 10;
console.log(num6); // 21

let num7 = (1 + 2) * 10;
console.log(num7); // 30


// 3. 복합 대입 연산자
// : 복합이 되어 있는 대입 연산자(산술 연산자 + 대입 연산자)
let num8 = 10;
num8 += 20; // num8 + num8 + 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;

console.log(num8);


// 4. 증감 연산자
// : 값을 1씩 줄이거나 늘릴 때 사용하는 연산자.
let num9 = 10;
num9++; // 후위 연산자: 해당 라인이 끝나야 연산이 이루어진다.
++num9; // 전위 연산자: 해당 라인에 즉시 연산이 이루어진다.

console.log(num9);


// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

console.log(or, and, not);


// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 연산자
let comp2 = 1 !== 2; // 비동등 연산자

console.log(comp1, comp2);

// ===
// : 값의 자료형까지 같은지 비교한다. (권장되는 방식)

// ==
// : 값의 자료형까지 같은지 비교하지 않는다.

let comp3 = 2 > 1;
let comp4 = 2 < 1;

console.log(comp3, comp4); // true, false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

console.log(comp3, comp4); // true, true