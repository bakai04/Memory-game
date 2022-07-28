import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";
import data from "../db.json";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
     const randomIndex = Math.floor(Math.random() * i);
     const currentIndex = i - 1;
     [array[randomIndex],array[currentIndex]]=[array[currentIndex], array[randomIndex]]
  }
  return array;
}
const RandomCards = shuffleCards([...data.cards, ...data.cards]); 

function Game({usersData, setUsersData}) {
 const [openedCard, setOpenedCard] = useState(0);
 const [cards, setCards]=useState(RandomCards);
 const [deletedCards, setDeletedCards]=useState([]);
 const [openedCards, setOpenedCards]=useState([]);

 const isCardFlipped=(key)=>{
  return openedCards.includes(key);
 }

 const onClickCard=(index)=>{
  if(openedCards.length === 1){
    setOpenedCards((prev)=>[...prev, index])
  }else{
    setOpenedCards([index]);
  }
 }

 const checkOpenedCards = (id) => {
  if(openedCard===0){
    setOpenedCard(id)
  }else{
    if(openedCard===id){
      setDeletedCards(prev=>[...prev, id]);}
    setOpenedCard(0);
  }
 } 


  return (
      <div className="container">
        <div className="wrap">
          <div className="game">
              {
                cards.map((card, index)=>(
                  <Card 
                    key={index}
                    index={index}
                    card={card}
                    isCardBlocked={deletedCards.includes(card.id)}
                    openedCard={openedCard}
                    isCardOpened={isCardFlipped(index)}
                    setOpenedCard={setOpenedCard} 
                    onClickCard={onClickCard} 
                    checkOpenedCards={checkOpenedCards}            
                  />
                ))
              }
          </div>
        </div>
      </div>
  )
}

export default Game;