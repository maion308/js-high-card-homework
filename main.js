const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck() {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({value: values[i], suit: suits[j], rank: i});
    }
  }
  console.log(deck);
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
