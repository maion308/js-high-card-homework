const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;
function buildDeck() {

values.forEach((value)=>{
  suits.forEach((suit)=>{
  deck.push(value + ' of ' + suit);
  })
})
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
};

let newArray = arrayShuffle(deck);

console.log(newArray);
}


function dealCardsToPlayers() {

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
