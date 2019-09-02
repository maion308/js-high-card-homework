

const values    = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ['♠️ ', '❤️ ', '♣', '♦️ '];
const deck      = [];
let player1Card = null;
let player2Card = null;
const dealt_card_1 = [];
const dealt_card_2 = [];
const p1Score = 0;
const p2Score = 0;


function buildDeck() {
  values.forEach((value)=>{
  suits.forEach((suit)  =>{
  deck.push(value + ' of ' + suit);
  })
})
return deck
};

function dealCardsToPlayers() {
   // Shuffle deck using Fisher-Yates shuffle alogorithm in javascript language
  let arrayShuffle = function(arr) {
  let newPos,
      temp;

      for(i = arr.length - 1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i + 1));

        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
      }
      return arr
}
let newArray = arrayShuffle(deck);

newArray.forEach((item, idx)=>{
  player1Card = newArray.splice(idx,1);
  console.log(player1Card);
  dealt_card_1.unshift(player1Card.shift());
  // console.log(player1Card.length);
  // console.log(newArray.length);
  // if(newArray.length <= 26){
  //   console.log(`out of cards`);
  // }
  return player1Card;
})

newArray.forEach((item, idx)=>{
  player2Card = newArray.splice(idx,1);
  return player2Card;

  //testing trying different methods
  // console.log(player2Card);
})

// player1Card.forEach((item)=>{
//   console.log(`player1 dealt ${item}`)

// })

// player1Card.forEach((item)=>{
//   console.log(`player 1 dealt card ${player1Card}`);
//   player1Card.splice(item,1);
//   console.log(player1Card.length);
// })

}

function announceCards() {

  player1Card.forEach((dealt)=>{
    return player1Card[dealt];
    dealt_card_1.push(player1Card.pop());
  // console.log(`player 1 dealt ${dealt}`)
  // console.log(player1Card[dealt])
  // console.log(player1Card);
  return dealt_card_1
  // console.log(player1Card);
  // console.log(dealt_card_1);
  // console.log(player1Card.length)
})
  player2Card.forEach((dealt)=>{
    return player2Card[dealt]
    dealt_card_2.push(player2Card.pop());
  // console.log(`player 2 dealt ${dealt}`)
  // console.log(player2Card.length)
  // console.log(player2Card)
  return dealt_card_2
})
// console.log(player1Card);
// console.log(player2Card);

return player1Card;
return player2Card;

}

// console.log(dealt_card_1);
// console.log(dealt_card_2);
function cardToRank(card) {
 
}

function announceWinner() {
}

function returnCardsToDeck() {
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck();
playGame();
