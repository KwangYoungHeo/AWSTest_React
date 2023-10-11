import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
    /*
    Player List 클릭시 List 컴포넌트로 이동
    => Link이용
    */
  return (
    <div style={{
        display :'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <img src='https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202006/10/hani/20200610190603693yecy.jpg' width='70%'></img>
        <br></br>
        <Link to='/list' style={{
            fontSize: '1.5em',
            textDecoration: 'none',
            color: 'black',
            backgroundColor:'lightgray',
            padding: '20px 30px',
            borderRadius: '20px'
        }}>Player List</Link>
    </div>
  )
}

export default Main