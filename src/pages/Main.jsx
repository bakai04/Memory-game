import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import logo from "../img/logo.png";
import checkHaveUser from '../utils/checkHaveUser';

function Main({ usersData, setUsersData, activeLevel, setActiveLevel, Level }) {
  const [userName, setUserName] = useState("");
  const [isRequired, setIsRequired] = useState(true);
  const navigate = useNavigate();

  function onChangeInput(event) {
    setUserName(event.target.value)
    if (event.target.value === "") {
      setIsRequired(false)
    } else {
      setIsRequired(true)
    }
  }

  useEffect(()=>{
    setUserName(usersData.length===0 ? "": usersData[0].name)
  },[usersData])

  function addNewUser(event) {
    event.preventDefault();
  
    if (userName.length > 0) {
      const newUsersData = checkHaveUser(usersData, userName);
      setUsersData(newUsersData)
      localStorage.setItem("usersData", JSON.stringify(newUsersData));
      navigate("../game", { replace: true })
    } else {
      setIsRequired(false)
    }
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
                <p className={isRequired ? "d-none" : "error"}>поле обязательно*</p>
              </form>
            </div>

            <div className="mode">
              {
                Level.map((item, index) => (
                  <div className={`mode__item ${activeLevel === index ? "mode__item--active" : ""}`}
                    onClick={() => { setActiveLevel(index) }}
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