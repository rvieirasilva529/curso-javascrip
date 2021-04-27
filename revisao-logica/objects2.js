//  SINTAXE LITERAL
const pessoa = {
    nome: "Maria",
    Idade: 28,
    "E-mail": "maria@sever.com"
}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}