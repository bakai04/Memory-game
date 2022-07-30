import React, { useEffect, useRef, useState } from 'react';
import Card from "../components/Card.jsx";
import Header from '../components/Header.jsx';
import ResultPage from '../components/ResultPage.jsx';



function Game({usersData,cards, setUsersData, activeLevel, Level}) {
 const [openedCard, setOpenedCard] = useState(0);
 const [deletedCards, setDeletedCards]=useState([]);
 const [flippingCards, setFlippingCards]=useState([]);
 const [count, setCount]=useState(0);
 const [seconds, setSeconds]=useState(0);
 const [visibleModal, setVisibleModal]=useState(false);

 const isCardFlipped=(key)=>{
  return flippingCards.includes(key);
 }


 const closeDoubleCards=() => {
  setTimeout(() => {
    setFlippingCards([]);
    setOpenedCard(0);
  }, 600);
  }


 const onClickCard=(index)=>{
  setCount(count+1)
  if(flippingCards.length === 1){
    setFlippingCards((prev)=>[...prev, index])
    closeDoubleCards();
  }else{
    setFlippingCards([index]);
  }
 }

 
const stopGame=()=>{
  setVisibleModal(true);
  let user=usersData[0];
  user.levels[activeLevel].time= (user.levels[activeLevel].time<seconds && user.levels[activeLevel].time !=0) ? user.levels[activeLevel].time:seconds;
  user.levels[activeLevel].count= (user.levels[activeLevel].count<count && user.levels[activeLevel].count !=0) ? user.levels[activeLevel].count:count;

  localStorage.setItem("usersData",JSON.stringify([user, ...usersData.slice(1)]))
  setUsersData([user, ...usersData.slice(1)]);
}


const playAgain=()=>{
  setVisibleModal(false);
  setDeletedCards([]);
  setFlippingCards([]);
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
      setDeletedCards(prev=>[...prev, id]);
    }
    setOpenedCard(0);
  }
 } 



  return (
    <div className='game'>
      <div className="container">
        <Header 
          count={count}
          seconds={seconds}
        />
        <div className="wrap">
          <div className={"game__inner " + Level[activeLevel].class}>
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
                    setFlippingCards={setFlippingCards}
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
    </div>
  )
}

export default Game;