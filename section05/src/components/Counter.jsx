import { useState } from 'react';

// React 컴포넌트는 자신이 갖고 있는 state가 변경이 되지 않더라도
// 부모로부터 받는 props의 값이 변경이 되면 다시 리렌더링이 된다.

// React에서 리렌더링이 되는 세 가지 경우
// 1. 자신이 관리하는 state의 값이 변경이 되었을 때
// 2. 자신이 제공받는 props의 값이 변경이 되었을 때
// 3. 부모 컴포넌트가 리렌더링이 되면 자식 컴포넌트도 리렌더링이 된다.
const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
      <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          +
        </button>
    </div>
    );
  };

  export default Counter;