import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
function Auth({usersData, setUsersData}) {
  const [userName, setUserName]= useState(usersData.length>0 ? usersData[0].name: "");
  const navigate = useNavigate();
  
  function onChangeInput(event){
    setUserName(event.target.value)
  }

  function addNewUser(event){
    event.preventDefault();
    let userData={
      name: userName,
      lastRecord: 0 
    }
    setUsersData(prev=>[userData, ...prev]);
    localStorage.setItem("usersData", JSON.stringify([userData, ...usersData]));
    navigate("../game", { replace: true })
  }

  return (
    <>
      <div className='authorization'>
        <div className="container">
          <div className='authorization__inner'>
            <h1 className='authorization__title'>Memory Game</h1>
            <form className='authorization__form' onSubmit={addNewUser}>
              <input className="form__name" value={userName} onChange={onChangeInput} placeholder='name' required></input>
              <button type='submit' className='startBtn'>Start</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth;
