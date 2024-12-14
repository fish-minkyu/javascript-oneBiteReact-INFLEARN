const Button = ({text, color, children}) => {
    // console.log(props); // 객체로 전달이 된다. {text: "메일"}

    // 이벤트 핸들러 함수
    // : 클릭과 같은 이벤트들을 실질적으로 처리하는 함수다.

    // 이벤트 객채 e
    // : 이벤트 객체는 DOM 이벤트에 대한 정보를 담고 있는 객체다.

    // SyntheticBaseEvent 객체
    // : SyntheticBaseEvent 객체는 매개변수 e에 저장된 이벤트 객체다.
    // 합성 이벤트 객체로서 어느 브라우저든 동일하게 사용할 수 있다.
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

{    return (
    <button 
    // 이벤트 핸들러 함수를 마치 콜백 함수를 전달하듯 그냥 함수 이름만 이벤트 핸들러로 설정해준다.
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color: color}}
    >
        {text} - {color.toUpperCase()}
        {children}
    </button>
    );
}};

// props 값 기본 설정
Button.defaultProps = {
    color: "black"
};

export default Button;