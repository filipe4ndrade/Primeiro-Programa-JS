var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color ='black'
    }
}
function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }
    else {
        currentNumberWrapper.style.color ='black'
    }
}
function zerador(){
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumberWrapper.style.color ='black'
}

function insert(num){
var numero = document.getElementById('calculoNumero').innerHTML;
document.getElementById('calculoNumero').innerHTML =  numero + num;
}

function clean(){
    document.getElementById('calculoNumero').innerHTML = "";
}
function calcular(){
    var numero = document.getElementById('calculoNumero').innerHTML;
    if(numero){
        document.getElementById('calculoNumero').innerHTML = eval(numero);
    }
}