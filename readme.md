# Let's Play High-Card-Wins

## Introduction

Let's play High Card! It's an exciting game of luck, skill, and... actually, no, just luck.

High card works such that two players are dealt a card, and the player with the higher card wins.

e.g.

```js
Player 1 is showing the 2 of Hearts
Player 2 is showing the J of Hearts
Player 2 wins!
```

Run the game with:

```bash
node main.js
```

You'll notice there's no output yet, since you'll need to implement the game!

## Directions

Open `main.js` in your editor.

Take a look at the starter code, and think about what the predefined variables offer you.

### Write the `buildDeck()` function
The first function that the game executes is `buildDeck()`. This function should fill the empty `deck` array with 52 cards (4 suits times 13 different card values). Each card should be an object with a property for its `value` and its `suit`, e.g. `{ suit: 'Hearts', value: 'Queen' }` Iterate over the `suits` and `values` arrays to make these cards.

### Write the `dealCardsToPlayers()` function

After the deck has been built, the `playGame()` function executes, and calls the `dealCardsToPlayers()` function. This function should set two random cards in the deck to `player1Card` and `player2Card`, and then remove them from the deck. The [`.splice()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#Remove_1_element_from_index_3) can be useful here.

### Write the `announceCards()` function

Now that the cards have been dealt, the `announceCards()` function should act as the dealer announcing what card each player has, like this:

```
Player 1 is showing the 5 of Spades
Player 2 is showing the Jack of Diamonds
```

### Write the `cardToRank()` function

To check who won the game, we need to compare the player's cards. This is going to be tricky, since the values of a card could be `1` and `Queen`, and what sense does `1 < Queen` make?

To make things simpler on us, let's write the `cardToRank()` function which accepts a card and returns an integer "rank" for it. A card's rank will be a number between 2 and 14, based on the card's value. A `2 of Spades` will have a rank of `2`, `6 of Hearts` will have a rank of `6`. For face cards, the ranks should be: `Jack = 11, Queen = 12, King = 13, Ace = 14`.

### Write the `announceWinner()` function

Now that the cards have been dealt, it's time to announce the winner! Write some logic to decide which player has the higher card using the `cardToRank()` function, and log out who won like this:

```
Player 2 wins!
```

If there's a tie, the game should log out:

```
It's a tie!
```

### Write the `returnCardsToDeck()` function

Put the `player1Card` and `player2Card` back in the `deck` array.


## Bonus

### Keep playing!

Make the game run over and over and over again.

### Keep score

Keep track of how many games each player won. Log out the current score after each game.