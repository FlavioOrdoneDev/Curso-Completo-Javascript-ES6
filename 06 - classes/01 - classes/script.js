
// Classe versus Constructor Function

class BotaoClasse {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function BotaoFunction(propriedade) {
  this.propriedade = propriedade;
}

BotaoFunction.prototype.metodo1 = function() {}
BotaoFunction.prototype.metodo2 = function() {}



// --------------------------------------------------------------------


function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');



// Classe

class ButtonClasse {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }

  static blueButton(text) {
    return new ButtonClasse(text, 'blue', 'white')
  }
}

// const blueButtonClasse = new ButtonClasse('Comprar', 'blue', 'white');

//console.log(blueButtonClasse.appendTo('body'));

const botaoAzul = ButtonClasse.blueButton('Comprar 2');
console.log(botaoAzul);




class NewButton {
  constructor(options) {
    this.options = options;
  }
}

const blueButton2 = new Button({
  backgroundColor: 'blue',
  text: 'Comprar',
  color: 'white'
})




// Static vs Prototype

class ButtonStatic {
  constructor(options) {
    this.options = options;    
  }
  static create(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const optionsBlue = {
  backgroundColor: 'blue',
  text: 'Comprar',
  color: 'white'
} 

const blueButtonStatic = ButtonStatic.create(optionsBlue.text, optionsBlue.backgroundColor);
console.log(blueButtonStatic);

