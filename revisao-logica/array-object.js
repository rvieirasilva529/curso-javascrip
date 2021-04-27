const nomes= ["", "", "" ]
const pessoa = {nome: "", idade: 10, email: ""}
const pessoa1 = {}

const pessoas = [{
    nome: "Raphael",
    idade: 31
}, {
    nome: "Isabela",
    idade: 28
}, {
    nome: "Heitor",
    idade: 03
}, {
    nome: "Andreia",
    idade: 51
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`O ${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}