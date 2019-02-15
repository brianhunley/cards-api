const _shuffle = require("lodash/shuffle");

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const suits = ["C", "H", "S", "D"];
const joker = "JK";

const createDeck = () => {
  deck = [];

  cards.forEach(card => {
    suits.forEach(suit => {
      deck.push(card + suit);
    });
  });

  return [...deck, joker, joker];
};

const getDeck = shuffle => {
  if (shuffle) {
    return _shuffle(createDeck());
  } else {
    return createDeck();
  }
};

const getCard = () => {};

module.exports = { getDeck, getCard };
