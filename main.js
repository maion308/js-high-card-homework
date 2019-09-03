// set up global variables
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ['♠️ ', '❤️ ', '♣', '♦️ '];
const deck = [];
// set 2 players inside a 3d array for easier output using index to distribute
const players = [[],[]];
 
// Nest everything inside the playGame function
function playGame(){

// build the deck using for..in object iterator or... enumerator
function buildDeck(){
for(suit in suits){
  for(val in values){
    var card = {
      suit: suits[suit],
      num: values[val],
      // use parseInt with the cardValue property so we can rank the cards
      // and check for inequality which we mainly need for the J Q K A cards
      cardValue:parseInt(val) + 2
    }
    deck.push(card)
  }
 }
// console.log(cards)
}
// Shuffle deck using Fisher-Yates shuffle alogorithm in javascript
function shuffleArray(array){
  for(i = array.length -1; i > 0; i--){
    var newNum = Math.floor(Math.random() * (i + 1));
    // The three lines below are moving the items around
    // basically swapping the index 
    // the third step makes a big difference in getting random numbers
    var temp = array[i];
    array[i] = array[newNum];
    array[newNum] = temp
  }
  return array
}

// deal cards for 2 players within a 3d array
function dealCards(array){
for(i = 0; i < array.length; i++){
  if(i % 2 == 0){
    players[0].push(array[i]);
  }else {
    players[1].push(array[i]);
  }
 }
 // by using the shift method we are taking the values out
 // of each player while storing that value into card1 and card2
 // this is needed to make sure we don't play forever
 // and the cards will empty out
  var card1 = players[0].shift();
  var card2 = players[1].shift();
  // create a pot so we can keep score 
  var pot = [card1, card2];

  //check for winner inside this function here
  checkWinner(card1, card2, pot);
  p1_score = players[0].length;
  p2_score = players[1].length;
  console.log(`Player1 score: ${p1_score} | Player2 score: ${p2_score}`)
  console.log("Game Over")
}

// check for winner check for inequality
function checkWinner(card1, card2, pot){
  console.log(card1, card2);
  if(card1.cardValue > card2.cardValue){
    console.log("Player 1 wins!!!");
    players[0] = players[0].concat(pot);
  }
  else if(card1.cardValue < card2.cardValue){
    console.log("Player 2 wins!!!");
    players[1] = players[1].concat(pot);
  }
  else {
    console.log("tie");
    playGame();
    // enter battle mode
  }
  console.log(players)
}



buildDeck();
shuffleArray(deck);
dealCards(deck);
// checkWinner();

}

playGame();
