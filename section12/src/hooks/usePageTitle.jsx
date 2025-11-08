import { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        // 변수명 앞에 $를 저장한 이유
        // : 관례상 이 변수가 DOM 요소가 저장될 것이란 의미다.
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title]);
};

export default usePageTitle;
