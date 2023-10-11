import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const Detail = () => {

  const { list } = useContext(PlayerContext)
  console.log(list);

  const {num} = useParams()
  console.log(num);

  return (
    <div className='item-item' >
      <img
        src={"data:image/;base64,"+list[num].imgSrc}
        alt=''></img>
      <table>
        <tbody>
          <tr>
            <td>이름</td>
            <td>{list[num].name}</td>
          </tr>
          <tr>
            <td>포지션</td>
            <td>{list[num].position}</td>
          </tr>
          <tr>
            <td>나이</td>
            <td>{list[num].age}세</td>
          </tr>
          <tr>
            <td>키, 몸무게</td>
            <td>{list[num].height}cm / {list[num].weight}kg</td>
          </tr>
          <tr>
            <td>소속 클럽</td>
            <td>{list[num].team}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail