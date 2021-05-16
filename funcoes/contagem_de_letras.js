/* CONTAGEM DE LETRAS REPETIDAS
            Exemplo
            
valor de cada parâmetro

The lord of the rings
o
resultado
2

explicação: Neste exemplo a frase The lord of the rings e a letra é
o. A letra o aparece na frase duas vezes, resultando em 2.*/

function teste(frase, letra) {
    let contagem = 0
    const palavraSplit = frase.split('')
    palavraSplit.forEach(item => {
        if(letra === item) contagem = contagem + 1
    })
return contagem
}