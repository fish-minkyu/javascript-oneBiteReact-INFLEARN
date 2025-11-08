import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// 매개변수로 현재 일기의 Id를 전달받아서
// data란 state로부터 find 메서드를 이용하여 해당하는 아이디를 갖는 일기 아이템을 찾아서
// currentDiaryItem이란 state에 저장하는 기능을 갖는 커스텀 훅
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurDiaryItem] = useState();

    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        // 해당 일기가 존재하지 않을 경우
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return currentDiaryItem
};

export default useDiary;
