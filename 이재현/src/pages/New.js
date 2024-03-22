import { useNavigate } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"
import Editor from "../component/Editor"
import { useContext } from "react"
import { DiaryDispatchContext} from "../App"

const New = ()=>{
    const navigate =useNavigate()
    const {onCreate}=useContext(DiaryDispatchContext)
    const onSubmit=(data)=>{
        const {date,emotionId,content}=data
        onCreate(date,emotionId,content)
        navigate('/',{replace:true})
    }
    const goBack=()=>{
        navigate(-1)
    }
    return(
        <div>
            <Header
            title={"새 일기 쓰기"}
            leftChild={<Button text={'뒤로 가기'} onClick={goBack}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New