// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three); // 1 2 3
console.log(one, two, three, four); // 1 2 3

// 2. 객체의 구조 분해 할당
let food = {
    type: "burger",
    name: "bigmac",
    price: 6300,
};

let { type, name, price: burgerPrice, extra = "hello" } = food;
console.log(type, name, burgerPrice, extra); // burger bigmac 6300 hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ type, name, price, extra }) => {
    console.log(type, name, price, extra);
};

func(food);
