import data from "../db.json";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    [array[randomIndex], array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
  }
  return array;
}

function getCards(activeLevel, Level) {
 const quantityCards= data.cards.slice(0, (Level[activeLevel].quantity)/2);
 return shuffleCards([...quantityCards, ...quantityCards]); 
}

export default getCards;
