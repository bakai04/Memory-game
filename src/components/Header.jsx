import React, { useEffect, useState } from 'react';
import translateSeconds from "../utils/translateSeconds";
function Header({ count, seconds }) {
    let time = translateSeconds(seconds);
    return (
        <div className="header">
            <div className="user-name">User</div>
            <div className="count">{count}</div>
            <div className="timer">{time} </div>
        </div>
    )
}

export default Header