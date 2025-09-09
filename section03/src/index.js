// 3.4 Node.js 모듈 시스템 이해하기.

import{add, sub} from "./math.js"; // 확장자명까지 적어주기

console.log(add(1, 2));
console.log(sub(1, 2));

// 모듈의 대표를 import할 땐, 중괄호 없이 불러와야 한다.
import mul from "./math.js"; // 대표로 불러오면 이름을 변경할 수 있다.
console.log(mul(2, 3))

// 동일한 모듈을 불러올 땐 이렇게 합쳐서 불러올 수 있다.
import mul, {add, sub} from "./math.js";