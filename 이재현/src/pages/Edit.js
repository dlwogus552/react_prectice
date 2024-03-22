import { useNavigate, useParams } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"
import { useContext } from "react"
import { DiaryDispatchContext } from "../App"
import useDiary from "../hooks/useDiary"
import Editor from "../component/Editor"

const Edit = ()=>{
    const navigate = useNavigate()
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext)
    const {id} = useParams()
    const data = useDiary(id)

    const goBack = ()=>{
        navigate(-1)
    }
    const onClickDelete = ()=>{
        if(window.confirm('일기를 정말 삭제할까요?')){
            onDelete(id)
            navigate('/',{replace:true})
        }
    }
    const onSubmit = (data)=>{
        if(window.confirm('일기를 수정할까요?')){
            const {date,content,emotionId}=data
            onUpdate(id,date,content,emotionId)
            navigate('/', {replace:true})
        }
    }

    return(
        <div>
            <Header 
            title={'일기 수정하기'}
            leftChild={<Button text={'<뒤로가기'} onClick={goBack}/>}
            righrChild={
                <Button
                type={'negative'}
                text={'삭제하기'}
                onClick={onClickDelete}/>
            }
            />
            <Editor initdata={data} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit