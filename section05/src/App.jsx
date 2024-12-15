import './App.css';
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";


// 함수 컴포넌트
// : 함수로 만든 컴포넌트
// "함수 이름" 컴포넌트라고 부른다.
function App() {
  return (
    <>
    <Bulb />
    <Counter />
    </>
  );
};

export default App;
// 모든 컴포넌트들의 조상 역할을 하는 App 컴포넌트를 
// 특별히 모든 컴포넌트들의 뿌리 역할을 한다고 해서 root 컴포넌트라고 부른다.