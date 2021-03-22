"use strict";

/* function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    text,
    element
  });
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

btnComprar.text = 'Novo texto';
btnComprar.element = 'Novo texto';

console.log(btnComprar, btnVender)


function Pessoa(nome) {
  if(!(this instanceof Pessoa))
    return new Pessoa(nome)
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer); */


function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function show() {
    elements.forEach( element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function hide() {
    elements.forEach( element => {
      element.style.display = 'none';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach( element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach( element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach( element => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    show,
    hide,
    on,
    addClass,
    removeClass,
  }
}

const btns = $$('button');
console.log(btns);

function handleClick(event){
  console.log(event.target);
  btns.addClass('ativo')
}

btns.on('click', handleClick);