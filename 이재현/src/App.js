import { useEffect, useReducer, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import React from 'react';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Home from './pages/Home';


//리듀서
function reducer(state, action) {
  switch (action.type) {
    case 'INIT':{
      console.log('init data',action.data)
      return action.data
    }
    case 'CREATE':
      return [action.data, ...state]
    
    case 'UPDATE':
      return state.map((it) => (
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      ))
    case 'DELETE':
      return state.filter((it) => (
        String(it.id) !== String(action.targetId)
      ))
    default:
      return state
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [data, dispatch] = useReducer(reducer, [])

  //리스트 받아오기
  useEffect(() => {
    axios.get('/list')
    .then((resp)=>{
      console.log(resp.data)
      dispatch({
        type: 'INIT',
        data: resp.data
      })
      setIsDataLoaded(true)
    })
  }, [])
  //추가
  const onCreate = (date, emotionId, content) => {
    axios.post('/insert', {
      date: date,
      emotionId: emotionId,
      content: content
    }).then((resp) => {
      console.log('insert : ', resp.data)
      dispatch({
        type: 'CREATE',
        data: {
          id: resp.data.id,
          date:resp.data.date,
          content: resp.data.content,
          emotionId: resp.data.emotionId
        }
      })
    })
  }
  //수정
  const onUpdate = (targetId, date, content, emotionId) => {
    axios.put(`/update`,{
      id:targetId,
      date:date,
      emotionId:emotionId,
      content:content
    })
    .then((resp)=>{
      console.log("update : ",resp.data)
      dispatch({
        type: 'UPDATE',
        data: {
          id: resp.data.id,
          date:resp.data.date,
          content: resp.data.content,
          emotionId: resp.data.emotionId
        }
      })
    })
    
  }
  //삭제
  const onDelete = (targetId) => {
    axios.delete(`/delete/${targetId}`)
    .then((resp)=>{
      console.log(resp.data)
      dispatch({
        type: 'DELETE',
        targetId
      })
    })
  }

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
