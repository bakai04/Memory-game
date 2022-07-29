import React, { useEffect, useState } from 'react'

function Header({count, seconds}) {
    let second = seconds;
  return (
    <header className='header'>
        <div className="container">
            <div className="header__inner">
                <div className="user-name">User</div>
                <div className="count">{count}</div>
                <div className="timer">{ Math.floor((second/60)%60)+":"+second%60} </div>
            </div>
        </div>
  </header>
  )
}

export default Header