// 단락 평가
// : AND 연산과 같은 논리 연산식에서 첫 번째 피연산자의 값만으로도
// 이 연산의 결과를 확정할 수 있다면
// 그 때에는 두 번째 피연산자에는 접근조차 하지 않는 실행 방식을 말한다.

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// returnFalse 함수가 false이기 때문에 returnTrue 함수 실행까지 가지 않는다.
console.log(returnFalse() && returnTrue()); // False 함수"

// returnTrue 함수가 true이기 때문에 returnFalse 함수 실행까지 가지 않는다.
console.log(returnTrue() || returnFalse()); // True 함수

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

// name이 Undefiend이므로 Truthy한 값인 "person의 값이 없음"이 출력된다.
printName();

// ||에는 name과 "person의 값이 없음" 모두 다 Truthy 하므로 첫 번째 Truthy 값이 출력된다.
printName({ name: "어민규" });


// ||
// : T || T 이면 첫 번째 Truthy한 값이 출력된다.

// &&
// : T && T 이면 두 번째 Truthy한 값이 출력된다.