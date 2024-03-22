import './Header.css'

const Header = ({title,leftChild,righrChild})=>{
    return(
        <div className='Header'>
            <div className='header_left'>{leftChild}</div>
            <div className='header_title'>{title}</div>
            <div className='header_right'>{righrChild}</div>
        </div>
    )
}

export default Header