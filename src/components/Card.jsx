import React, { useState } from 'react'

function Card({index, card, isCardBlocked, isCardOpened, onClickCard, checkOpenedCards, openedCard, setOpenedCard}){

  const handleClick = (e)=>{
    if(e.target.checked){
      checkOpenedCards(card.id);
    }else{
      if(openedCard === card.id) setOpenedCard(0);
    }
  }
  return (
    <label className={isCardBlocked? "blocked-cards" : ""}>
        <input type="checkbox" checked={isCardOpened} onClick={()=>{onClickCard(index)}} className={card.id} onChange={handleClick}/>
        <div className="card">
            <div className="front">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"></img>
            </div>
            <div className="back">
              <img src={card.img}></img>
            </div>
        </div>
    </label>
  )
}
export default Card;