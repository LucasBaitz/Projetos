const data = document.querySelector('.data');
const tempo = document.querySelector('.tempo');
const iniciar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const reiniciar = document.querySelector('#reiniciar');
const salvarTempo = document.querySelector('#salva-tempo')
const temposLista = document.querySelector('.tempos')

let limite = 0
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let contagem;

function formatarTempo() {
  let segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
  let minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
  let milisegundosFormatados = milisegundos < 10 ? `0${milisegundos}` : milisegundos;
  return `${minutosFormatados}:${segundosFormatados}:${milisegundosFormatados}`;
}

function contagemSecs() {
  contagem = setInterval(function() {
    milisegundos++;
    if (milisegundos === 100) {
      milisegundos = 0;
      segundos++;
    }
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    tempo.innerHTML = formatarTempo();
  }, 10);
}



// Pegars os eventos e agir de acordo
iniciar.addEventListener('click', function() {
  limite += 1
  if (limite === 1){
    return contagemSecs();
  }
  
});

parar.addEventListener('click', function() {
  limite = 0
    clearInterval(contagem);

});

reiniciar.addEventListener('click', function() {
    tempo.innerHTML = '00:00:00';
    segundos = 0;
    minutos = 0;
    milisegundos = 0;
    clearInterval(contagem);
});

salvarTempo.addEventListener('click', function() {
  let lista = document.createElement('li');
  lista.innerHTML = tempo.innerHTML
  temposLista.appendChild(lista)
});