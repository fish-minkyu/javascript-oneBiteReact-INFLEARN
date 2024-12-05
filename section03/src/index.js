// CJS
// const moduleData = require("./math");
// console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 객체 구조분해할당으로 모듈 가져오기
// const {add, sub} = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));


// ES Module
import multiply from "./math.js"; // multiply의 이름을 변경이 가능하다. multiply -> mul
import {add, sub} from "./math.js"; // 모듈의 확장자까지 넣어서 import 시켜주기.

// 경로가 같다면 import문을 합칠 수도 있다.
import multiply, {add, sub} from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));