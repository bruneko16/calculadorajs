function calcularMultiplicacao() {
            
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

   
    let resultado = multiplicacao(num1, num2);
    document.getElementById('resultado').innerText = 'O resultado da multiplicação é: ' + resultado;
}

function calcularDivisao() {
   
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    
    if (num2 === 0) {
        document.getElementById('resultado').innerText = 'Erro: Divisão por zero não é permitida.';
        return;
    }

   
    let resultado = divisao(num1, num2);
    document.getElementById('resultado').innerText = 'O resultado da divisão é: ' + resultado;
}
function calcularsoma() {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

   
    let resultado = soma(num1, num2);
    document.getElementById('resultado').innerText = 'O resultado da soma é: ' + resultado;
}
function calcularsub() {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

   
    let resultado = subtracao(num1, num2);
    document.getElementById('resultado').innerText = 'O resultado da subtracao é: ' + resultado;
}
    

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}
function soma(num1, num2){
    return num1 + num2;
}
function subtracao(num1, num2){
    return num1 - num2;
}