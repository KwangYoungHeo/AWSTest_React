import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import List from './pages/List'
import Detail from './pages/Detail'
import './player.css'
import { PlayerContext } from './context/PlayerContext'

const Player = () => {
  /*
  (1) public 안의 json 파일에서 데이터 가져오기
      => useEffect, axios 사용
      => state 생성 후 가져온 데이터 세팅
  (2) 컴포넌트 생성 및 라우팅 설정
      => 메인페이지 : Main , /
      => 리스트페이지 : List, /list
      => 선수 상세페이지 : Detail, /detail
  */

  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("Spring으로 요청");
    const url = "http://localhost:8090/SpringBoot2/PlayerList.do"
    axios.post(url, {responseType : 'blob'})
      .then((res) => {
        console.log(res.data)
        setList(res.data)
      })
      .catch(() => {
        console.log('error');
      })
  }, [])


  return (
    <PlayerContext.Provider value={{ list, setList }}>
      <div>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/list' element={<List />}></Route>
          <Route path='/detail/:num' element={<Detail />}></Route>
        </Routes>
      </div>
    </PlayerContext.Provider>
  )
}

export default Player