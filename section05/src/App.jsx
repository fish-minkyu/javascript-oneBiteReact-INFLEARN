import "./App.css";
import Header from "./components/Header.jsx"; // Vite로 인해 파일 확장자는 안써도 된다.
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

function App() {
    const buttonProps = {
        text: "카페",
        color: "blue",
        a: 1,
        b: 2,
    };

    return (
        <>
            <Button text={"메일"} color={"red"} />
            <Button {...buttonProps} />
            <Button text={"블로그"}>
                <div>자식요소</div>
            </Button>
        </>
    );
}

export default App;
