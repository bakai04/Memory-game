import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import logo from "../img/logo.png";

function Main({usersData, setUsersData, activeLevel, setActiveLevel, Level}) {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    function onChangeInput(event){
      setUserName(event.target.value)
    }
  
    function addNewUser(event){
      event.preventDefault();
      let userData={
        name: userName,
        levels:[
          {
            time: 0,
            count: 0,
          },
          {
            time: 0,
            count: 0,
          },
          {
            time: 0,
            count: 0,
          }
        ]
      }
      setUsersData(prev=>[userData, ...prev]);
      localStorage.setItem("usersData", JSON.stringify([userData, ...usersData]));
      if(userName.length>0) navigate("../game", { replace: true })
    }

  return (
    <>
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <img src={logo} alt="logo" />
                    <h1 className='main__title'>Memory Game</h1>

                    <div className='authorization'>
                      <form className='authorization__form' onSubmit={addNewUser}>
                        <input className="form__name" value={userName} onChange={onChangeInput} placeholder='name' required></input>
                      </form>
                    </div>

                    <div className="mode">
                       {
                        Level.map((item, index)=>(
                            <div className={`mode__item ${activeLevel===index? "mode__item--active":""}`}
                            onClick={()=>{setActiveLevel(index)}}
                            key={index}
                            >{item.name}</div>
                        ))}
                    </div>
                    <button className='main__btn' onClick={addNewUser}>Start</button>
                    <Link to="/leaders"><p className='main__leaders'>Leaders</p></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main;