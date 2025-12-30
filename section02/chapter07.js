// 6가지의 요 조작 메드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1.length); // 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem, arr3); // 1, [2, 3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); // 4, [0, 1, 2, 3]

// cf) shift, unshift는 push, pop보다는 느리게 동작한다.
// shift, unshift는 앞 요소에 제거 및 추가를 하는 것이기에
// 인덱스 번호 또한 수정이 되므로 더 오래 걸린다.

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// (원본 배열의 값은 변경되지 않는다.)
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1); // 뒤에서 하나 자르기

console.log(sliced); // [3, 4, 5]
console.log(sliced2); // [3, 4, 5]
console.log(sliced3); // [5]
console.log(arr5); // [1, 2, 3, 4, 5];

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
