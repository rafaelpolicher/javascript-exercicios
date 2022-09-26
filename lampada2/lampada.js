var turnOnOff = document.getElementById('turnOnOff')
var lamp = document.getElementById('lamp')

function isBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isBroken()){
    lamp.src = './img/ligada.jpg'
}
}

function lampOff(){
    if(!isBroken()){
    lamp.src = './img/desligada.jpg'
}
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'
    alert('Você quebrou a lampada!')
}

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
//se o conteudo do texto for igual a 'ligar'
        lampOn()//executará a funçao lampOn()
        turnOnOff.textContent = 'Desligar'
//e o botao 'turnonoff' receberá o texto'Desligar'
    } else{
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}


turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)

