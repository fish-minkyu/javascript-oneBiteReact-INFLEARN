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