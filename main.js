const values    = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits     = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck      = [];
let player1Card = null;
let player2Card = null;


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
  player1Card = newArray.splice(idx,1)
  console.log(player1Card.length);
  console.log(newArray.length);
  if(newArray.length <= 26){
    console.log(`out of cards`);
  }
})

// player1Card.forEach((item)=>{
//   console.log(`player 1 dealt card ${player1Card}`);
//   player1Card.splice(item,1);
//   console.log(player1Card.length);
// })

}

function announceCards() {
}

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
