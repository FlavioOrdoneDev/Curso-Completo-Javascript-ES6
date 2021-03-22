

const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  }
}


const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';


// Classes

class ButtonClasse {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
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

const novoBotao = new ButtonClasse('Comprar', 'blue', 'white');

novoBotao.element = 'a';
console.log(novoBotao.element);