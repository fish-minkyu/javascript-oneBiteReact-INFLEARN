import { useParams } from "react-router-dom";

const Diary = () => {
    // URL Parameter 방식
    const { id } = useParams();

    return <div>{id}번 일기입니다.</div>;
};

export default Diary;
