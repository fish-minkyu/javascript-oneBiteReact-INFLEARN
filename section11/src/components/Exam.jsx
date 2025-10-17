import { useReducer } from "react";

// reducer: 변환기
// -> 상태를 실제로 변화시키는 변환기 역할

// state: 현재 state 값
// action: 요청 내용이 담긴 action 객체
function reducer(state, action) {
    // 상태변화 함수도 없는데 어떻게 state를 변경할 수 있을까?
    // : reducer 함수에서 새로운 state 값을 반환만 해주면 된다.
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            state;
    }
}

const Exam = () => {
    // dispatch(발송하다, 급송하다란 의미를 가지고 있다.)
    // : 상태 변화를 요청하기만 하는 함수
    // 즉, 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수로는 상태가 어떻게 변화되길 원하는지 그 정보를 전달해줘야 한다.
        // 액션 객체
        // : 인수로 전달된 요청의 내용을 담고 있는 객체
        dispatch({
            type: "INCREASE",
            data: 1,
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;
