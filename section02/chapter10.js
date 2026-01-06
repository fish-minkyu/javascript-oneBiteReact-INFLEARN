// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1); // 현 시간으로 출력

let date2 = new Date("1995-12-19");
// "1995.12.19" "1995/12/19" 도 가능
// 1995, 12, 19, 23, 59, 59도 가능
console.log(date2);

// 2. 타임 스탬프
// : 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC: "1970.01.01 00시 00분 00초"
let ts1 = date1.getTime();
let date3 = new Date(ts1);
console.log(date1, date3);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월은 0부터 시작이 된다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 숫자 2는 3월이 된다.
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 년월일만 출력
console.log(date1.toLocaleString()); // 한글로 된 날짜 출력
