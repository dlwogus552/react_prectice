import { useContext, useEffect, useState } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom"

const useDiary =(id)=>{
    const data = useContext(DiaryStateContext)
    const navigate=useNavigate()
    const [diary,setDiary] =useState()

    useEffect(()=>{
        const matchDiary=data.find((it)=>String(it.id)===String(id));
        if(matchDiary){
            setDiary(matchDiary)
        }else{
            alert('일기가 존재하진 않는다')
            navigate(-1)
        }
    },[id,data])

    return(
        diary
    )
}

export default useDiary