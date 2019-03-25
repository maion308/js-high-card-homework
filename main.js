const prompt = require('readline-sync');
const chalk = require('chalk');

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

 const visual =
['┏━━━━━━━━━┓ ',
 '┃        ┃ ',
 '┃         ┃ ',
 '┃         ┃ ',
 '┃        ┃ ',
 '┗━━━━━━━━━┛ ']
 ;

 const displayCard = card => {
   for (let i = 0; i < 6; i++) {
     let { value } = card;
     switch(i) {
       case 0:
       case 2:
       case 3:
       case 5:
          console.log(chalk.bgWhite.black(visual[i]));
          break;
       case 1:
          if (value == '10') {
            console.log(chalk.bgWhite.black(visual[i].substring(0,2)+value+visual[1].substring(3)));
            break;
          }
         if (parseInt(card.rank) > 8) value = value.substring(0,1);
          console.log(chalk.bgWhite.black(visual[i].substring(0,2)+value+visual[1].substring(2)));
          break;
       case 4:
       let cardIcon;
        switch (card.suit.toLowerCase()) {
          case 'diamonds':
            cardIcon = '♦️';
            break;
          case 'hearts':
            cardIcon = '♥️';
            break;
          case 'clubs':
            cardIcon = '♣️';
            break;
          case 'spades':
            cardIcon = '♠️';
            break;
          }
         console.log(chalk.bgWhite.black(visual[i].substring(0,7)+cardIcon+visual[1].substring(7)));
         break;
     }
   }
 }

function random(array) {
  return array.splice(Math.floor(Math.random() * array.length),1)[0];
}

function buildDeck() {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({value: values[i], suit: suits[j], rank: i});
    }
  }
}

function dealCardsToPlayers() {
  player1Card = random(deck);
  player2Card = random(deck);
}

function announceCards() {
  displayCard(player1Card);
  console.log(`Player 1 has the ${player1Card.value} of ${player1Card.suit}.`);
  displayCard(player2Card);
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
  deck.push(player1Card, player2Card);
}

function playAgain() {
  return prompt.question('Would you like to play again? y/n\n') === 'y';
}

function playGame() {
  let playing = true;
  while (playing) {
    dealCardsToPlayers();
    announceCards();
    announceWinner();
    returnCardsToDeck();
    playing = playAgain();
  }
  process.exit();
}

buildDeck();
playGame();
