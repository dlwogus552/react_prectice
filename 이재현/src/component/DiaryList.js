import './DiaryList.css'
import Button from './Button'
import DiaryItem from './DiaryItem'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

const sortOptionList =[
    {value:"latest",name:"최신순"},
    {value:"oldest",name:"오래된 순"}
]


const DiaryList = ({ data }) => {
    const navigate=useNavigate()
    const [sortType,setSortType]=useState('latest')
    const [sortedData,setSortedData]=useState([])

    //데이터받아오기
    useEffect(()=>{
        const copyList = JSON.parse(JSON.stringify(data))
        setSortedData(copyList)
    },[data,sortType])
    //글 쓰기
    const onclickNew=()=>{
        navigate('/new')
    }
    //select 바꾸기
    const onChangeSortType=(e)=>{
        setSortType(e.target.value)
    }
    return (
        <div className='DiaryList'>
            <div className='menu_wrapper'>
                <div className='left_col'>
                    <select value={sortType} onChange={onChangeSortType}>
                        {
                            sortOptionList.map((it,idx)=>(
                                <option value={it.value} key={idx}>
                                    {it.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='right_col'>
                    <Button
                        type={"positive"}
                        text={"새 일기 쓰기"}
                        onClick={onclickNew}
                    />
                </div>
            </div>
            <div className='list_wrapper'>
                {
                    sortedData.map((it)=>(
                        <DiaryItem key={it.id} {...it}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DiaryList