import React, { useEffect, useState } from 'react';
import translateSeconds from "../utils/translateSeconds";
function Header({userName, count, seconds }) {
    let time = translateSeconds(seconds);
    
    return (
        <div className="header">
            <div className="user-name">{userName}</div>
            <div className="count">{count}</div>
            <div className="timer">{time} </div>
        </div>
    )
}

export default Header