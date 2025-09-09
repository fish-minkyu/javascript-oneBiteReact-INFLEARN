// math 모듈

// 방법1.
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export{add, sub};

// 방법2.
export function add2(a, b) {
    return a + b;
}

export function sub2(a, b) {
    return a - b;
}

// default를 설정하면 math 모듈을 대표하는 모듈이 된다.
export default function multiply(a, b) {
    return a * b;
}