let num = document.querySelector('input#fnum') 
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

    function isNumero(n) {//funçao p ver se o n esta entre 1 e 100
        if(Number(n) >= 1 && Number(n) <= 100) {//ver Number do parametro n esta entre 1 e 100
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {// ver se o n esta na lista
        if (l.indexOf(Number(n)) != -1) {  // -1 significa q o numero n foi encontrado
            return true
        } else {
            return false
        }
    }

    function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)) {//se o numero for isnumero e inlista
            valores.push(Number(num.value))//para add o num no final do vetor
            let item = document.createElement('option')//criar o elemeto <option>
            item.text = `Valor ${num.value} adicionado`//mensagem dentro da variavel item
            lista.appendChild(item)//inserir um novo nó no DOM
            res.innerHTML=''//o res ficara vazio
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
        num.value = ''//apagar o numero da caixa de texto
        num.focus()//nao precisar clicar novamente
    }

    function finalizar(){
        if (valores.length == 0){
            window.alert('Adicione valores antes de finalizar')
        } else{
            let total = valores.length 
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
//inicialmente o maior numero e o menor estarao na posiçao 0
            for(let pos in valores){
                soma += valores[pos]//somar os valores
                if(valores[pos] > maior){
                    maior = valores[pos]
                }
//se o n for maior q a var maior, entao ela recebe esse n
                if (valores[pos] < menor){
                    menor = valores[pos]
                }
//se o n for menor q a var menor, entao ela recebe esse n

            }
            media = soma / total
            res.innerHTML=''
            res.innerHTML+=`<p>Ao todo temos ${total} numeros cadastrados</p>`
            res.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
            res.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML+=`<p>A soma de todos os valores ${soma}</p>`
            res.innerHTML+=`<p>A media dos valores é ${media}</p>`

        }
    }