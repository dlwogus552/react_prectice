import { useContext, useEffect, useState } from 'react'
import Button from '../component/Button'
import Header from '../component/Header'
import DiaryList from '../component/DiaryList'
import { getMonthRangeByDate } from '../util'
import { DiaryStateContext } from '../App'

const Home = () => {
    const data = useContext(DiaryStateContext)
    const [pivotData,setPivotDate] = useState(new Date())
    const headerTitle=`${pivotData.getFullYear()}년
                        ${pivotData.getMonth()+1}월`

    const [filteredData, setFilteredData] = useState([])
    useEffect(()=>{
        if(data.length >=1){
            // const {beginTimeStamp,endTimeStamp} = getMonthRangeByDate(pivotData)
            setFilteredData(
                data.filter((it)=>
                    `${pivotData.getMonth()}` <= it.date && it.date <= `${pivotData.getMonth()+1}`
                )
            )
        }else{
            setFilteredData([])
        }
    },[data,pivotData])
    const onDecreaseMonth=()=>{
        setPivotDate(new Date(pivotData.getFullYear(),pivotData.getMonth()-1))
    }
    const onIncreaseMonth=()=>{
        setPivotDate(new Date(pivotData.getFullYear(),pivotData.getMonth()+1))
    }
    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                righrChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
                <DiaryList data={filteredData}/>
        </div>
    )
}

export default Home