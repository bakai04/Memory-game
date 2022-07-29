import React, { useEffect, useRef, useState } from 'react';
import Card from "../components/Card.jsx";
import Header from '../components/Header.jsx';
import ResultPage from '../components/ResultPage.jsx';
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
 const [count, setCount]=useState(0);
 const [seconds, setSeconds]=useState(0);
 const [visibleModal, setVisibleModal]=useState(false);

 const isCardFlipped=(key)=>{
  return openedCards.includes(key);
 }

 const closeDoubleCards=() => {
  setTimeout(() => {
    setOpenedCards([]);
  }, 600);
  }


 const onClickCard=(index)=>{
  setCount(count+1)
  if(openedCards.length === 1){
    setOpenedCards((prev)=>[...prev, index])
    closeDoubleCards();
  }else{
    setOpenedCards([index]);
  }
 }

 
const stopGame=()=>{
  setVisibleModal(true);
  let user={
    name: usersData[0].name,
    count: (usersData[0].count<count && usersData[0].count !=0) ? usersData[0].count:count,
    time: (usersData[0].time<seconds && usersData[0].time != 0) ? usersData[0].time:seconds,
  }
  localStorage.setItem("usersData",JSON.stringify([user, ...usersData.slice(1)]))
  setUsersData([user, ...usersData.slice(1)]);
}


const playAgain=()=>{
  setVisibleModal(false);
  setDeletedCards([]);
  setOpenedCards([]);
  setCount(0);
  setSeconds(0);
  setOpenedCard(0);
}

// useEffect(() => {
//  const interval = setInterval(() => {
//    setSeconds(seconds => seconds + 1);
//  }, 1000);
//  if(visibleModal) clearInterval(interval)
//  return () => clearInterval(interval);
//  }, []);


  useEffect(()=>{
    if(deletedCards.length === cards.length/2) stopGame();
  },[deletedCards]);


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
    <>
      <Header 
        count={count}
        seconds={seconds}
      />
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
      {
        visibleModal? 
        <ResultPage
          time={seconds}
          score={count}
          playAgain={playAgain}
        />
        :""
      }
    </>
  )
}

export default Game;