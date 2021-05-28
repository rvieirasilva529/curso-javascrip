//Chamar o this diretamente no console nos traz o objeto global do contexto em que o JavaScript está executando.

// O 'this' no devtools do chrome nos traz o objeto "window" no Node nos traz o objeto "global"

// console.log(this.document === document)

// //Em navegadores Web, o Objeto window é também o objeto global:
// console.log(this === window); // true

// this.a = 37
// console.log(window.a); // 37

// Quando não estiver no modo estrito o this apontará para o objeto blogal
function thisnaoestrito(){ console.log(this)}

// Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução, assim, no 
// caso a seguir, this por padrão será indefinido(undefined)

function thisEstrito(){ 'use strict';
console.log(this)}

// Como método de um objeto

const o = {
    prop: 100,
    f: function(){
        return this.prop;
    }
};

console.log(o.f())

// Funções Arrow(seta)
// Nas Arrow functions ( funções seta), o this é definido lexicalmente, isto é, seu valor é definido pelo contexto
// de execução onde está inserido. um código global, this assume o objeto global:

// Contexto de Criação: Glogal
const arrowFunctionThis = () => { console.log(this)}

// Contexto de Criação: Objeto // ERRADO!!
const arrowFunctionThis = {
    prop: 150,
    arrowF: () => {console.log(this)}
}

// Contexto de Criação: Objeto // CORRETO
const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function(){
            console.log( (() => this)())
    }
}