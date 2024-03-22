import { emotionList } from '../util'
import './Viewer.css'

const Viewer=({content,emotionId})=>{
    console.log(emotionId)
    const emotionItem = emotionList.find((it)=>(it.id===emotionId))
    return(
        <div className="Viewer">
            <section>
                <h4>오늘의 감정</h4>
                <img src={emotionItem.img} alt={emotionItem.name}/>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className='content_wrapper'>
                    <p>{content}</p>
                </div>
            </section>
            <section>
                <h4>오늘의 </h4>
            </section>
            
        </div>
    )
}

export default Viewer