// 5가지 배열 변형 메서
// 1. filter
// : 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "홍길동1", hobby: "테니스" },
    { name: "홍길동2", hobby: "테니스" },
    { name: "홍길동3", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// 2. map
// : 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idr, arr) => {
    return item * 2;
});
console.log(mapResult1); // 2, 4, 6

let names = arr1.map((item) => item.name);
console.log(names); // 홍길동1, 홍길동2, 홍길동3

// 3. sort
// : 배열을 사전순으로 정렬하는 메서드
// 단, 숫자로 이뤄진 배열에선 정렬이 정상적으로 이뤄지지 않는다. <- 사전순으로 정렬하기 때문에
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
// 오름차순 정렬
arr4.sort((a, b) => {
    if (a > b) {
        // b가 더 작으니 a 앞에 와라
        return 1;
    } else if (a < b) {
        // a가 b 앞에 와라
        return -1; // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
});
console.log(arr4); // [3, 5, 10]

// 내림차순 정렬
arr4.sort((a, b) => {
    if (a > b) {
        // a가 b 앞에 와라
        return -1;
    } else if (a < b) {
        // b가 a 앞에 와라
        return 1; // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
});
console.log(arr4); // [10, 5, 3]

// 4. toSorted
// : 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]

// 5. join
// : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드.
let arr6 = ["hi", "im,", "홍길동"];
const joined = arr6.join(" ");
console.log(joined); // hi im, 홍길동