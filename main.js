const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i+=1) {
    for (let j = 0; j < arr2.length; j+=1) {
      let card = {
        num: arr1[i], 
        suit: arr2[j], 
        value: arr1[i] 
      }
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}

function dealCardsToPlayers() {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let randomIndex2 = Math.floor(Math.random() * deck.length);
  player1Card = deck[randomIndex];
  player2Card = deck[randomIndex2];
  
  deck.splice(randomIndex, 1);
  deck.splice(randomIndex2, 1);
  
}

function announceCards() {
  console.log(`Player 1 has ${player1Card.num} of ${player1Card.suit}, Player 2 has ${player2Card.num} of ${player2Card.suit}`);
}

function cardToRank(card) {
  if (card.value === 'Ace') {
    return 1
  }
  if (card.value === 'Jack') {
    return 11
  }
  if (card.value === 'Queen') {
    return 12
  }
  if (card.value === 'King') {
    return 13
  } else {
    return card.value
  }
}

function announceWinner() {
  let player1Rank = cardToRank(player1Card)
  let player2Rank = cardToRank(player2Card)

  if (player1Rank > player2Rank) {
    console.log('Player 1 Wins')
  } else if (player2Rank > player1Rank) {
    console.log('Player 2 Wins');
  } else {
    console.log("It's a draw");
  }
}

function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
playGame();