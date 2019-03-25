const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function random(array) {
  return array.splice(Math.floor(Math.random() * array.length),1)[0];
}

function buildDeck() {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({value: values[i], suit: suits[j], rank: i});
    }
  }
  console.log(deck);
}

function dealCardsToPlayers() {
  player1Card = random(deck);
  player2Card = random(deck);
}

function announceCards() {
  console.log(`Player 1 has the ${player1Card.value} of ${player1Card.suit}.`);
  console.log(`Player 2 has the ${player2Card.value} of ${player2Card.suit}.`);
}

function cardToRank(card) {
  return values.indexOf(card.value);
}

function announceWinner() {
  switch(true) {
    case cardToRank(player1Card) > cardToRank(player2Card):
      console.log('Player 1 Wins!');
      break;
    case cardToRank(player1Card) < cardToRank(player2Card):
      console.log('Player 2 Wins!');
      break;
    default:
      console.log('It\'s a tie!');
      break;
  }
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
