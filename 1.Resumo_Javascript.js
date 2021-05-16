
/*Resumo Javascript === ECMAScript- é uma linguagem dinamicamente tipada(fraca)
Declarando uma variavel
var, let e const, qual usar?

VAR escopo da função
LET e CONST escopo de bloco
OBS CONST não pode ser reatribuido para valores primitivos*/

let minhaVariavel; //undefined
let outraVariavel; //undefined

minhaVariavel = "olá";
outraVariavel = 100;

var a = 10;
let b = 10;
const c = 10;

/*TIPOS PRIMITIVOS - SÃO 5: number, string, boolean, undefined, null*/

let meuNumero = 10;
let minhaSting = "Olá Pláneta!";
let meuBooleano = true || false;
let meuNull = null;
let meuUndefined = undefined;

console.log("Meu numero é ", meuNumero);
console.log("O tipo do número é: ", typeof meuNumero);
console.log("O tipo da minha strang é: ", typeof minhaSting);
console.log("O tipo do meu boolean é: ", typeof meuBooleano);
console.log("O tipo de null é: ", typeof meuNull);
console.log("O tipo do meu undefined é: ", typeof meuUndefined);

// Todos os primitivos são imutáveis (não podem ter o seu valor modificado).

/* OPERADORES ARITMETICOS
(+)  SOMA
(-) SUBTRAÇÃO
(*) MULTIPLICAÇÃO
(/) DIVISÃO
(%) MODULO (RESTO DA DIVISÃO)
(**) EXPONENCIAÇÃO
(++) INCREMENTO
(--) DECREMENTO 

length repassa o tamanho dos caracteres no elemento

OPERADORES DE COMPRAÇÃO

== Igualdade(valor)
!= Diferente(valor)
=== Igualdade(valor e tipo)
!== Diferente(valor e tipo)
> Maior
>= Maior ou igual
<  Menor
<= Menor ou igual

Funções, Estrutura inicial:*/

function minhaFunc(PARAMETRO){ //PARÂMETROS SÃO COMO VARIAVEIS, SÓ QUE EM UM CONTEXTO DE FUNÇÃO.
    //codigo aqui

    // no final retorna explicitamente ou implicitamente.

}

// FUNÇÃO ANÔNIMA:

let anonima = function (){
    return 'sou o retorno da função'
}
console.log(anonima)
console.log(anonima())

// ES Arrow functions:

let arrowF = () => "sou o retorno na Arrow Function" // Se tiver só uma linha não precisa dos parenteses

console.log(arrowF)
console.log(arrowF())

// IIFE (Immediately Invoked Function Expression - ou função imediata)

let retornoDaIIFE = (function(){
    return 'Sou o retorno de uma função imediata(IIFE)'
})()

console.log(retornoDaIIFE)


/*HOISTING EM JAVASCRIPT, FUNÇÕES E VARIÁVEIS SÃO HOISTED (OU LEVADAS AO TOPO)
É UM COMPORTAMENTO DO JAVASCRIPT DE MOVER DECLARAÇÕES PARA O TOPO DE UM ESCOPO (O ESCOPO GLOBAL OU DA FUNÇÃO EM QUE SE ENCONTRA)*/
// EXEMPLO 1:

// foo = 2
// console.log(foo)
// var foo;

// EXEMPLO 2:

// hoisted(); // faz o log da string "foo"

// function hoisted(){
//     console.log("foo")
// }

// EXEMPLO 3:

bar = 2
console.log(bar) //bar is not defined
let bar

