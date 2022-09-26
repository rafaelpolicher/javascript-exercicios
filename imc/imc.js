
var calcular = document.getElementById('calcular')


function imc(){
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = document.getElementById('resultado')
    var body = document.getElementById('body')

    if(nome !=='' && altura!=='' && peso !==''){
        var valorimc = (peso / (altura * altura)).toFixed(1)
        //fixar apenas uma casa decimal
   
        var classificaçao = ''
        if(valorimc < 18.5){
            body.style.backgroundColor = '#F5CC00'
            classificaçao = 'abaixo do peso.'
        }else if (valorimc < 25){
            body.style.backgroundColor = '#6AF54E'
            classificaçao = 'com o peso ideal.'
        }else if(valorimc < 30){
            body.style.backgroundColor = '#F5CC00'
            classificaçao = 'acima do peso.'
        }else if(valorimc< 35){
            body.style.backgroundColor = '#F55600'
            classificaçao = 'com obesidade grau I.'
        }else if(valorimc < 40){
            body.style.backgroundColor = '#F50900'
            classificaçao = 'com obesidade grau II.'
        }else{
            body.style.backgroundColor = '#000000'
            classificaçao = 'com obesidade grau III.'
        }



        resultado.innerHTML = `${nome} seu IMC é: ${valorimc} <br>
        Você esta ${classificaçao}`
    } else{
        resultado.innerHTML = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc)
//ou onclick="calcular()"