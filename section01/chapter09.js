// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
    console.log("numdms 10 이상입니다.");
    console.log("조건이 참 입니다!");
} else if (num >= 5) {
    console.log("numdms 5 이상입니다.");
    } else if (num >= 3) {
    console.log("numdms 3 이상입니다.");
    } else {
    console.log("조건이 거짓입니다!");
}


// 2. Switch문
// : if문과 기능 자체는 동일
// 다수의 조건을 처리할 때는 if보다 더 직관적이다.

let animal = "owl";

// 비교하고 싶은 변수를 넣기.
switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다.")
    }
}
// 소괄호에 있는 값과 일치하는 부분을 위에서 아래로 차례대로 탐색을 한다.
// 탐색을 하다가 일치하는 케이스를 만나게 되면, 그 아래에 있는 모든 코드들을 수행해준다.