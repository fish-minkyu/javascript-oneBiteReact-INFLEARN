// 1. 변수
// let 생성할 이름 = 27;
// 선언: 없었던 변수를 새롭게 생성하는 과정.
// 초기화: 변수의 초기값을 넣는다.

let age; // undefiend
console.log(age);

age = 30;
console.log(age);

// 2. 상수
// : 초기화 이 후에는 다시 값을 바꿀 수 없다.
// 값을 변화시키는 것 자체가 불가능하므로 초기화가 반드시 필요하다.
// 따라서 바뀌면 안되는 값을 넣어야 할 때 사용한다.
const birth = "1995.12.19";

// 3. 변수 명명규칙(네이밍 규칙)
// : 변수, 상수의 이름을 정하는 행위
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// 예약어: js가 특수하게 사용하기로 약속한 언어다.
// let let => 오류 발생

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;

