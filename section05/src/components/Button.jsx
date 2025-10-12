const Button = ({ text, color, children }) => {
    // 매개변수로 이벤트 객체를 제공한다.
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button
            // onClick같은 것들을 이벤트 핸들러
            // onClick={() => {
            //     console.log(text);
            // }}
            onClick={onClickButton} // 함수 이름만 이벤트 핸들러로 전해준다.
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color}
            {children}
        </button>
    );
};

export default Button;
