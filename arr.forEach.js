// O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é
// invocado para propriedades de índices que foram deletados ou que não foram inicializados 
//(por ex. em arrays esparsos).

/*callback é invocado com três argumentos:

o valor do elemento
o índice do elemento
o array que está sendo percorrido*/

const meuNome = [
    {nome: 'Raphael'},
    {nome: 'Lucas'},
    {nome: 'Vieira'},
]

console.log('logando o valor de cada parte do nome')
meuNome.forEach(umaParteDoNome => {
    console.log(umaParteDoNome.nome)
})

console.log('Logando o indice de cada parte do nome')
meuNome.forEach(function(umaParteDoNome, posicao){
    console.log(`A parte ${umaParteDoNome.nome} está na posição ${posicao}`)
})

console.log('Logando cada nome e o array completo')
meuNome.forEach((umaParteDoNome, posicao, arrayCompleto) => {
    console.log(umaParteDoNome)
    console.log(posicao)
    console.log(arrayCompleto)
} )

function teste(element, index, array) {
    console.log("a [" + index + "] = " + element);
}
[2, 5, 9].forEach(teste);