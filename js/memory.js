class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    console.log(this.cards);
  }


  shuffleCards() {

    if (!this.cards) return undefined;

    const hat = [...this.cards];
    const emptyArr = [];

    for (let i = 0; i < this.cards.length; i++) {
      let randomNum = Math.floor(Math.random() * hat.length);
      emptyArr.push(hat[randomNum]);
      hat.splice(randomNum, 1);
    } 
    this.cards = emptyArr;
    return this.cards;
    
  }

  checkIfPair(card1, card2) {
    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } this.pairsClicked += 1;
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 8) return true;
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
