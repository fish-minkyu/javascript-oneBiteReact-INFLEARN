// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// CJS(Common JS 시스템)
// module.exports = {
//     add, 
//     sub
// }


// ES Module
export {add, sub};

// 함수에 export 키워드를 붙이는 것도 가능
export function add1(a, b) {
    return a + b;
}

export function sub1(a, b) {
    return a - b;
}

// export default
// : math.js 모듈을 대표하는 단 하나의 default 값 설정.
export default function multiply(a, b) {
    return a * b;
}