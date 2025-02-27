// 1. null 병합 연산자(??)
// : 존재하는 값을 추려내는 기능을 한다.
// null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var4); // 20

// 만약 2개의 변수가 모두 값이 존재한다면, 맨 처음에 적힌 값이 반환이 된다.
let var6 = var2 ?? var3;
console.log(var6) // 10;

// Ex
let userName = "어민규";
let userNickName = "winterlood";

let displayName = userName ?? userNickName;
console.log(displayName); // 어민규


// 2. typeof 연산자
// : 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello"; // 실행될 때에 변수의 타입이 정해진다. (동적으로 정해진다.)

let t1 = typeof var7;
console.log(t1); // string


// 삼항 연산자
// : 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환.
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";