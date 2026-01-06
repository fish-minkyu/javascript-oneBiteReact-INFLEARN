// 비동기 함수의 결과값을 외부에서 이용하기
// : 비동기 작업을 하는 함수의 결과값을 함수 외부에서 이용하고 싶다면
// 아래의 방식으로 콜백 함수를 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정해주면 된다.
// 즉, 비동기 함수의 내부에서 비동기 작업의 결과값을 콜백 함수의 인자로 전달해주면 된다.
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
});

// Ex.
// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "햄버거";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
// 이런 식으로 진행한다면 들여쓰기(indent)가 > 이런 식으로 깊어지게 되는
// 콜백 지옥이 시작된다.