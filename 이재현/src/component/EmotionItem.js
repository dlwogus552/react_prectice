import './EmotionItem.css'

const EmotionItem = ({id,name,img,onClick,isSelected})=>{

    const handleOnClick = ()=>{
        onClick(id)
    }
    return(
        <div 
        className={['EmotionItem', isSelected ? `EmtionItem_on_${id}` : `EmotionItem_off`].join(' ')}
        onClick={handleOnClick}>
            <img src={img} alt={id}/>
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem