// 5가지 요소 순ㅣ 및 탐색 메드
// 1. forEach
// : 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메소드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
    doubleArr.push(item * 2);
});
console.log(doubleArr); // [2, 4, 6]

// 2. includes
// : 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncloude = arr2.includes(3);
console.log(isIncloude); // true

// 3. indexOf
// : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 (가장 앞에 있는 요소의 위치를 반환)
// 단, 특정 요소의 값이 존재하지 않다면 -1을 반환
// 단, 원시 값 타입이 아닌 객체 타입이라면 정확한 위치를 찾을 수 없다. (얕은 비교)
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1

// 4. findIndex
// : 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 단, 특정 요소의 값이 존재하지 않다면 -1을 반환
// (객체 타입도 정확한 위치를 찾을 수 있다.)
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
    item % 2 !== 0;
});
console.log(findIndex); // 0

let objectArr = [{ name: "홍길동" }, { name: "인프런" }];
const result = objectArr.findIndex((item) => {
    item.name === "홍길동";
});
console.log(result); // 0

// 5. find
// : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
const finded = objectArr.find((item) => item.name === "인프런");
console.log(finded); // { name: "인프런" }
