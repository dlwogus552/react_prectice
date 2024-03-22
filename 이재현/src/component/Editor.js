import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Editor.css'
import { useCallback, useEffect, useState } from 'react'
import { getFormattedDate, emotionList } from '../util'
import EmotionItem from './EmotionItem'

const Editor = ({ onSubmit, initdata }) => {

    const navigate = useNavigate()
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ''
    })

    useEffect(() => {
        if (initdata) {
            setState({
                ...initdata,
                // date: getFormattedDate(new Date(initdata.date))
            })
        }
    }, [initdata])
    
    const handleChangeDate = (e) => {
        console.log(e.target.value)
        setState({
            ...state,
            date: e.target.value
        })
    }
    const handleOnGoBack = () => {
        navigate(-1)
    }
    const handleSubmit = () => {
        onSubmit(state)
    }
    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state) => ({
            ...state,
            emotionId
        }))
    },[])
    const handleChangeContent = (e) => {
        console.log(e.target.value)
        setState({
            ...state,
            content: e.target.value
        })
    }

    return (
        <div className='Editor'>
            <div className='input_wrapper'>
                <h4>오늘의 날짜</h4>
                <input type='date' value={state.date} onChange={handleChangeDate} />
            </div>
            <div className='editor_section'>
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {
                        emotionList.map((it) => (
                            <EmotionItem
                                key={it.id}
                                {...it}
                                onClick={handleChangeEmotion}
                                isSelected={state.emotionId === it.id}
                            />
                        ))
                    }
                </div>

            </div>
            <div className='editor_section'>
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea placeholder='오늘은 어땠나요?'
                        onChange={handleChangeContent}
                        value={state.content}>
                    </textarea>
                </div>
            </div>
            <div className='editor_section bottom_section'>
                <Button text={'취소하기'} onClick={handleOnGoBack} />
                <Button text={'작성완료'} type={'positive'} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Editor