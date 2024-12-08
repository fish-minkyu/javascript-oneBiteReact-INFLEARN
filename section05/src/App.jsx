import './App.css';
// ES모듈로 파일을 import를 해줘도 파일 확장자를 생략할 수 있다.
// 그 이유는 vite로 만든 이런 리액트 엡에서는 이 확장자를 안써도 자동으로 
// 파일을 찾아가도록 내부적으로 자동 설정이 되었기 때문이다.
import Header from "./components/Header.jsx";
import Main from "./components/Main";
import Footer from "./components/Footer";

// 함수 컴포넌트
// : 함수로 만든 컴포넌트
// "함수 이름" 컴포넌트라고 부른다.

// 부모 컴포넌트
function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
};

export default App;
// 모든 컴포넌트들의 조상 역할을 하는 App 컴포넌트를 
// 특별히 모든 컴포넌트들의 뿌리 역할을 한다고 해서 root 컴포넌트라고 부른다.