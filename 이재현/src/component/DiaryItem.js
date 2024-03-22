import { useNavigate } from 'react-router-dom'
import { getEmotionImgById } from '../util'
import Button from './Button'
import './DiaryItem.css'

const DiaryItem = ({ id, emotionId, content, date }) => {
    const navigate = useNavigate()
    const goEdit = () => {
        navigate(`/edit/${id}`)
    }
    const goDetail = () => {
        navigate(`/diary/${id}`)
    }
    return (
        <div className='DiaryItem'>
            <div
                className={['img_section', `img_section_${emotionId}`].join(' ')}
                onClick={goDetail}
            >
                <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
            </div>
            <div>
                <div className='date_wrapper'>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className='content_wrapper'>
                    {content}
                </div>
            </div>
            <div className='button_section'>
                <Button
                    text={'수정하기'}
                    onClick={goEdit}
                />
            </div>


        </div>
    )
}

export default DiaryItem