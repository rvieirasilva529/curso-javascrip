// A programação estruturada é feita de escolhas lógicas
// Verdadeiro ou falso.
// sim ou não
// 0 ou 1.
// E a maneira mais simples de reprensentar isso é por meio das estruturas de condição.

// Exemplo 1:
// const fruta = 'maçã'

// if(fruta === 'maçã')
//     console.log('fruta é igual a maçã')
// else 
//     console.log('fruta não é igual a maçã')

// Exemplo 2:
// const numero = 1

// if(numero === 1){
//     console.log('é igual a 1')
// } 

// if(numero === 2){
//     console.log('é igual a 2')
// }

// if(numero === 3){
//     console.log('é igual a 3')
// }

// Exemplo 3:
// O mesmo código acima, escrito de uma forma que execute apenas uma das operações verdadeiras

// const numero = 1

// if(numero === 3){
//     console.log('é igual a 1')
// } else if(numero === 2){
//     console.log('é igual a 2')
// } else {
//     console.log('é igual a 3')
// }

//_________________________________________________________________

// Conectivos && e || (E ou OU)
// Na lógica argumentativa, existem os conceitos de proposições(premissas) verdadeiras e falsas:

// Premissas:
// P1: Eu gosto de javascript.
// P2: eu gosto de tecnologia.

/*Quando quero juntar elas em uma única sentença, posso usar o conectivo "E" ou "OU":
Eu gosto de Javascritp 'e' gosto de tecnologia.
Eu gosto de Javascript 'ou' gosto de tecnologia.

No primeiro exemplo, a expressão toda só será verdadeira, se ambas as preposições (P1 e P2) sozinhas forem verdadeiras.
caso contrário toda a expressão é falsa.

No segundo exemplo, a expressão toda será verdadeira, se ao menos uma das premissas (P1 e P2) for veidadeira.
Caso contrário toda expressão é falsa.

Em liguagens de programação em geral, temos que o conectio 'E' é representado pelo 'E' comercial (&&).

Exemplo prático usando conectivo &&(E):*/

// const numero1 = 10, numero2 = 20

// if((numero1 === 10) && (numero2 ===20))
//     console.log('Expressão if foi suprida com valor verdadeiro.')
// else
//     console.log('Expressão if foi suprida com valor falso.')

// Exemplo prático usando conectivo || (ou):

// const string1 = 'Java', string2 = 'Script'

// if((string1 === 'Java') || (string2 ==='JavaScript'))
//     console.log('Expressão if foi suprida com valor verdadeiro.')
// else
//     console.log('Expressão if foi suprida com valor falso.')

// Estrutura de condição switch.
// Ideal para quando é necessário o uso de diversas condições.

// const item = 5

// switch(item){
//     case 1:
//         console.log('Item 1 - setor de brinquedos')
//         break
//     case 2:
//         console.log('Item 2 - setor de maquiagem')
//         break
//     case 3:
//         console.log('Item 3 - setor de calçados')
//         break
//     case 4:
//         console.log('Item 4 - setor de eletrodomésticos')
//         break
//     case 5:
//         console.log('Item 5 - setor de vestuário feminio')
//         break
//     case 6:
//         console.log('Item 6 - setor de vestuário masculino')
//         break
//     case 7:
//         console.log('item 7 - setor de vestuário infantil')
//         break
//     case 8:
//         console.log('item 8 - setor de utensílios domésticos')
//         break
//     default:
//         console.log('Número informado é inválido')
//         // Como o defaut é a última linha a ser executada, tanto faz o uso do break.
//         // Só seria realmente necessário caso não fosse a última linha a ser executada.
// }

// Vamos supor que a linha de vestuário tenha sido unificada,
// e pra que não haja erros de uso por meio dos funcionários, os valores tenham sido mantidos.
// veja como ficaria o código:

// const item = 6

// switch(item){
//     case 1:
//         console.log('Item 1 - setor de brinquedos')
//         break
//     case 2:
//         console.log('Item 2 - setor de maquiagem')
//         break
//     case 3:
//         console.log('Item 3 - setor de calçados')
//         break
//     case 4:
//         console.log('Item 4 - setor de eletrodomésticos')
//         break
//     case 5:
//     case 6:
//     case 7:
//         console.log('item 7 - setor de vestuário feminio, masculino e infantil')
//         break
//     case 8:
//         console.log('item 8 - setor de utensílios domésticos')
//         break
//     default:
//         console.log('Número informado é inválido')
//         // Como o defaut é a última linha a ser executada, tanto faz o uso do break.
//         // Só seria realmente necessário caso não fosse a última linha a ser executada.
// }

// Existe também uma outra forma de representar uma condição.
// Que é por meio do Operador ternário.
// Exemplo 4:

// const idade = 17

// idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade") 

// Exemplo de uma função com retorno usando operador ternário:

const somaOuMultiplica = (valor) => {
    return valor >= 10 ? valor + valor : valor * valor;
}

// Mesma função escrita utilizando o if - else

// const somaOuMultiplica = function (valor){
//     if(valor >= 10){
//         return valor + valor
//     } else {
//         return valor * valor
//     }
// }

// Soluções na tela:
console.log('Menores que 10:')
console.log( somaOuMultiplica(1))
console.log( somaOuMultiplica(2))
console.log( somaOuMultiplica(3))
console.log( somaOuMultiplica(6))
console.log( somaOuMultiplica(9))

console.log('Maiores que 10:')
console.log( somaOuMultiplica(10))
console.log( somaOuMultiplica(11))
console.log( somaOuMultiplica(20))
console.log( somaOuMultiplica(50))
console.log( somaOuMultiplica(100))



