import { useSearchParams } from "react-router-dom";

const Home = () => {
    // params
    // : 쿼리스트링으로 전달한 변수와 값들이 들어오게 된다.

    // setParams
    // : 특정 쿼리스트링을 변경할 수 있는 함수가 들어오게 된다.
    const [params, setParams] = useSearchParams();
    // Ex.
    // ?value=hello
    // console.log(params.get("value")); // hello

    return <div>Home</div>;
};

export default Home;
