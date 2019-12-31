export default class Palavra{
  constructor(palavra) {
    this._palavra = palavra
  }

  temALetra(letra) {
    const posicoes = []
    const palavra = this._palavra
    for(let i=0; i < palavra.length; i++) {
      if (palavra[i].toLowerCase() == letra) {
        posicoes.push(i)
      }
    }
    return posicoes;
  }
}