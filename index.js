function valor(numero){
    let display = document.getElementById('display');
    if (display.innerHTML.length < 16) {
        display.innerHTML += numero;
    }
}

function limpar(){
    document.getElementById('display').innerHTML = "";
}

function limparUltimo(){
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}

function calcular(){
    let calcular = document.getElementById('display').innerHTML;
    if(calcular){
        document.getElementById('display').innerHTML = eval(calcular);
    }
    else{
        document.getElementById('display').innerHTML = 'Digite um calculo!'
    }
}