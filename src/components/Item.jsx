import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = (p) => {

    /* 프로필 카드 클릭
    클릭 시 해당하는 선수의 상세페이지로 이동
    -> useNavigate 사용    
    */
    const nav = useNavigate()

    return (
        <div className='item-item' onClick={()=>{
            console.log("itemDetail 요청");
            const url = "http://13.125.47.82:8090/SpringBoot2/PlayerDetail.do?name="+p.item.name;

            axios.get(url, {name : p.item.name})
            .then((res)=>{
                console.log(res.data);
                console.log(res);
            })

            nav(`/detail/${p.index}`)}}>
            <img
            src={"data:image/;base64,"+p.item.imgSrc}
            alt=''></img>
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{p.item.name}</td>
                    </tr>
                    <tr>
                        <td>포지션</td>
                        <td>{p.item.position}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Item