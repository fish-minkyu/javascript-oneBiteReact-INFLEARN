import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        // : useEffect가 반환하는 함수를 클린업, 정리함수라 부른다.
        // 정리함수는 useEffect가 끝날 때 실행이 된다.
        // 따라서, 마운트 될 때 useEffect가 실행이 되고
        // 종료는 언마운트 때 되므로 정리함수는 언마운트 때, 실행이 되는 것이다.
        return () => {
            console.log("unmount");
        };
    }, []);

    return <div>짝수입니다</div>;
};

export default Even;
