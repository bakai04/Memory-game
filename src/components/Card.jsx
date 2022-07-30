import React, { useState } from 'react'

function Card({index,card, isCardBlocked,setFlippingCards, isCardOpened, onClickCard, checkOpenedCards, openedCard, setOpenedCard}){

  const handleClick = (e)=>{
    if(!isCardOpened){
      checkOpenedCards(card.id);
      onClickCard(index)
    }else{
      if(openedCard === card.id) {
        setOpenedCard(0)
        setFlippingCards([])
      }
    }
  }
  
  return (
    <label className={isCardBlocked? "blocked-cards" : ""}>
    <input type="checkbox" checked={isCardOpened} className={card.id} onChange={handleClick}/>
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