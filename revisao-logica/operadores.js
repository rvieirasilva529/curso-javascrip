//+ - * / % **
//let n1 = 10;
//let n2 = 5;

//OPERADORES ARITMÉTICOS
/*console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3); */
 
// OPERADOR DE ATRIBUIÇÃO

//let n3 = 25;
//n3 = n3 + 15;
//n3 += 2;
//console.log(n3);

//INCREMENTO E DECREMENTO

let i = 0;
i++; // ou i--;
i++;
i++;
console.log(i);

// OPERADORES DE COMPARAÇÃO
/*
IGUALDADE DE VALOR ==
IGUALDADE DE VALOR E TIPO ===
<, MENOR QUE 
<= MENOR OU IGUAL
>, MAIOR QUE
>= MAIOR OU IGUAL
!= VALORES DIFERENTE
!== VALORES E TIPOS DIFERENTES
*/


//console.log(n1 == "10");
//console.log(n1 === "10");
//console.log(n1 <= "10");
//console.log(n1 >= "10");
//console.log(n1 != "10");
//console.log(n1 !== "10");

// OPERADORES LOGICOS
/*
PARA UMA PESSOA VIAJAR PARA O EXTERIOR:
- PRECISA SER MAIOR DE 18 ANOS
OU
ACOMPANHADO COM OS PAIS
E
TER COMPRADO O BILHETE
*/

let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode Viajar: ${podeViajar}`);

// let msgMaiorIdade = "";
// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade"
// } else{
//     msgMaiorIdade = "É menor de 18 anos"
// }

let msgMaiorIdade =  (idade >= 18) ? "É maior de idade":"É menor de 18 anos"

if(!comprouBilhete ){
    console.log("Não, comprou o Bilhete");
}else{
    if(idade >= 18){
        console.log("Sim, Pode viajar pois é maior de idade")
    }else{
        console.log("não Pode viajar pois é menor de idade")
    }

}

let n1 = 0;
let n2 = 8;
let media = (n1 + n2) / 2
console.log(`media; ${media}`);

if (n1 === 0 || n2 === 0){
    console.log("Reprovado")
} else if(media <7 ){
    console.log("Reprovado, mas tem como recuperar")
} else{
    console.log("Aprovado")
}

console.log("saiu do Bloco if")





