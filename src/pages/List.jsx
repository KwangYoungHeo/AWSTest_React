import React, { useContext } from 'react'
import Item from '../components/Item'
import { PlayerContext } from '../context/PlayerContext';

const List = () => {

  const { list } = useContext(PlayerContext)

  let mfList = list.filter((item, index) => (item.position === 'MF' && (item.index = index)));

  // let mfList = list.filter((item, index) => {
  //   if (item.position === 'MF') {
  //     item.index = index; // 새로운 속성 추가
  //     return true; // 조건에 맞는 경우만 필터링
  //   }
  //   return false; // 조건에 맞지 않는 경우는 필터링하지 않음
  // });

  return (
    <div className='list-container'>
      <h1>KOREA REPUBLIC</h1>
      <div className='item-container'>
        {list.map((item, index) => (<Item key={index} item={item} index={index}></Item>))}
      </div>
      <h1>MF</h1>
      <div className='item-container'>
        {mfList.map((item) => (<Item key={item.index} item={item} index={item.index}></Item>))}
      </div>
    </div>
  )
}

export default List