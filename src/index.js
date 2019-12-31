import Classe from './javascript/Main';

const instance = new Classe()
$('document').ready(() => {
  instance.init()
  $('.letra').on('click', function(el) {
    const letra =  $(this).html().toLowerCase()
    instance.sayHello(letra)
  })

})