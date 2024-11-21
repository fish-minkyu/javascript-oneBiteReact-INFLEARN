// 1. 묵시적 형 변환
// : 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // num이 String 타입인 str과 더하면서 묵시적으로 String 타입인 문자열로 변경.
console.log(result); // 1020


// 2. 명시적 형 변환
// : 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시.

// Cf) 내장함수란?
// : 자바스크립트 안에 저장되어 있는 함수

// 문자열 -> 숫자로 저장한다.
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

// 숫자 안에 문자열이 있다면?
// : Not a Number 출력이 된다.
let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

let str3 = "10개";
let strToNum3 = parseInt(str3); // 숫자가 앞쪽으로 나와 있어야 한다.
console.log(strToNum3); // 10

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다."); // 20입니다.