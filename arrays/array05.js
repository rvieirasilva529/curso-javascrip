let arr = [1, 2, 3, 4]
//console.log(arr.reverse())

let j = 0;
const soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log("i: ", i)
    console.log("j: ", j++)
    console.log("acumulador: ", acumulador,"--- atual: ", atual)
    return acumulador + atual
}, 0)
console.log(soma)
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "Joao"]
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){

    /*  1 - interação
        nomes = {}
        nomeAtual = "Daniel" -> primeiraLetra = nomeAtual[0] = "D"
        return {D:1}
        2 - interação
        nomes = {D: 1}
        nomeAtual = "Maria"-> primeiraLetra = "M"
        retern {D: 1, M: 1}
        3 - interação
        nomes = {D: 1, M: 1}
        nomeAtual = "Joana" -> primeiraLetra = "J"
        return {D: 1, M: 1, J: 1}
        4 - interação
        nomes = {D: 1, M: 1, J: 1}
        nomeAtual = "Joao" -> primeiraLetra = "J"
        return {D: 1, M: 1, J: 2}
        */
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesPorOrdem)

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
const numerosUnicos = [1,3,4,5,8,9]