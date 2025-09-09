// 3.4 Node.js 모듈 시스템 이해하기.

// CJS
// const moduleData = require("./math");
// console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 객체 구조분해할당으로 모듈 가져오기
const {add, sub} = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));