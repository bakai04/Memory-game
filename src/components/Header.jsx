import React, { useEffect, useState } from 'react'

function Header({count, seconds}) {
    let second = seconds;
  return (
      <div className="header">
          <div className="user-name">User</div>
          <div className="count">{count}</div>
          <div className="timer">{ Math.floor((second/60)%60)+":"+second%60} </div>
      </div>
  )
}

export default Header