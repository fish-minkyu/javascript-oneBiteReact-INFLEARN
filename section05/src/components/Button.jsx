const Button = ({text, color, children}) => {
    // console.log(props); // 객체로 전달이 된다. {text: "메일"}
{    return (
    <button style={{color: color}}>
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