import { useNavigate, useParams } from "react-router-dom"
import useDiary from "../hooks/useDiary"
import { getFormattedDate } from "../util"
import Header from "../component/Header"
import Button from "../component/Button"
import Viewer from "../component/Viewer"

const Diary = () => {
    const { id } = useParams()
    const data = useDiary(id)

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const goEdit = () => {
        navigate(`edit/${id}`)
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다.</div>
    } else {
        const { date, content, emotionId } = data
        // const title = `${getFormattedDate(new Date(Number(date)))}`
        const title = `${date}`

        return (
            <div>
                <Header
                    title={title}
                    rightChild={<Button text={'수정하기'} onClick={goEdit} />}
                    leftChild={<Button text={'<뒤로가기'} onClick={goBack} />}
                />
                <Viewer content={content} emotionId={emotionId} />
            </div>
        )
    }
}

export default Diary