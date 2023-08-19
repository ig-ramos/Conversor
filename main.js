const form = document.querySelector('#form');
const valor = form.querySelector('#valor');
const resultado = form.querySelector('#resultado');
const reset = form.querySelector('#rest');
const opCtoF = form.querySelector('#CtoF');
const opFtoC = form.querySelector('#FtoC');

opCtoF.addEventListener('click', (e) => {
    e.preventDefault();
    resultado.innerHTML = CtoF(valor.value);
})

opFtoC.addEventListener('click', (e) => {
    e.preventDefault();
    resultado.innerHTML = FtoC(valor.value);
})

function CtoF(x){
    return (x * 9 / 5) + 32
}

function FtoC(x){
    return (x - 32) * 5 / 9
}
