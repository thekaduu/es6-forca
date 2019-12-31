import Palavra from './Palavra'

export default class Main {
  constructor() {
    this._palavra = 'ffffg'
    this._erros = 0;
  }
  sayHello(letra) {
    const palavra = new Palavra(this._palavra)
    const posicoes = palavra.temALetra(letra.toLowerCase())

    if(posicoes.length == 0) {
      this._erros++
      this._showError();
    }

    posicoes.forEach((p) => {
      const div = document.getElementById('texto')
      div.children[p].innerHTML = letra
    })
  }

  _showError() {
    const img =  document.createElement('img')
    const div = document.getElementById('imagem-forca')
    if (this._erros  < 5) {
      return alert(`Voce ainda tem  ${5 - this._erros} chances`)
    }
    img.src= './images/forca.gif'
    div.append(img)
  }

  init() {
    for(let i=0;  i  < this._palavra.length; i++) {
      const div = document.getElementById('texto')
      let  li =  document.createElement('li')
      li.classList.add('list-group-item')
      li.innerHTML = '_'
      div.append(li)
    }
  }
}