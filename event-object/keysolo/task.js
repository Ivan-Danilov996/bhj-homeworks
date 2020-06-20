class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.counter = container.querySelector('.status__counter');
    this.id = undefined

    this.reset();

    this.registerEvents();

  }

  reset() {
    
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    if(this.id) {
      clearInterval(this.id)
    }
    this.start()

  }

  start() {
    this.id = setInterval(() => {
      if(this.counter.textContent <= 0) {
        alert('Вы проиграли!');
        clearInterval(this.id)
      } else {
        this.counter.textContent -= 1
      }
    }, 1000);
  }

  

  registerEvents() {
    document.addEventListener( 'keydown', (event) => {
      if(this.currentSymbol.textContent.toLowerCase() == event.key.toLowerCase()) {
        this.success()
      } else {
        this.fail()
      }
    });


    
    
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
      
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.counter.textContent = word.length

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


