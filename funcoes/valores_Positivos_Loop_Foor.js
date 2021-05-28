// Desafio
// Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo 
//desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

// Entrada
// Você receberá seis valores, negativos e/ou positivos.

// Saída
// Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de 
//saída. Não esqueça da mensagem "valores positivos" ao final.

let positivos = 0;
for (var i = 0 ; i <= 6; i++) {
    let valor = parseInt(gets()); // let line = gets(); Retorna a próxima linha de entrada(quando for utilizado em testes)
    if (valor > 0){
    positivos++;
    }
}
console.log(positivos + ' valores positivos');