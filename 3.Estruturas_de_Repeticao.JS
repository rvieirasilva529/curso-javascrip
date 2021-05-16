// ESTRUTURAS DE REPETIÇÃO (LOOPS)

// interar -> fazer ou dizer novamente; repetir, reiterar.

// ITERADORES CLASSICOS:
// DO WHILE
// WHILE
// FOR

// ITERADORES DE ESTRUTURAS DE DADOS ITERÁVEIS:
// FOR IN
// FOR OF

// MÉTODOS DE OBJETOS ITERÁVEIS
// MÉTODOS DE ARRAYS E OBJECTS

// EXEMPLOS

// ***********Imprimindo números de 1 a 5************
// let conte = 1;
// do {
//     console.log("conte é: " + conte);
//     conte++;
// }while(conte <= 6)
//conte é: 1 //conte é: 2 //conte é: 3 //conte é: 4 //conte é: 5

//***************Imprimindo caracteres numa string(cadeia de caracteres)*****************

//string na qual estamos executando a repetição:
// let str = "hello";
//primeiro caractere está no índice 0:
// let count = 0;
// do{
//  console.log(str[count]);
//  count++;
// }while(count < str.length)
// "h" //"e" //"l" //"l" //"o"

//WHILE LOOP

// let conte = 1;
// while(conte <= 6 ){
//     console.log('count is: ' + conte)
//     conte++;
// }

//***************Imprimindo caracteres numa string(cadeia de caracteres)*****************

// //string na qual estamos executando a repetição:
// let str = "hello";
// //primeiro caractere está no índice 0:
// let count = 0;
// while(count < str.length){
//  console.log(str[count]);
//  count++;
// }
// // "h" //"e" //"l" //"l" //"o"

//******* Loops Infinitos ocorrem quando a condição que está sendo testada nunca se torna verdadeira
// let count = 0;
// while(count <10){
//     console.log(count);
// }
//********O exemplo acima imprime "0" infinatamente porque nunca é incrementado *******

// //Exercicio 1
// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num += 2;
// }

// //Exercicio 2
// let num = 1;
// while(num <= 20){
//     if(num % 4 === 0){
//         console.log(num);
//     }
//     num++;
// }

// //Exercicio 3
// let num = 100;
// while(num < 150){
//     console.log(num + 1);
//     num--;
// }

// FOR LOOP

// for (let i = 0; i < 6 ; i++)
//     console.log(i)

// //OU
// let i = 0
// for(;;){
//     if(i<6)
//         console.log(i)
//     i++
// }

// //***********Imprimindo números de -10 a 29 ***************/
// for (let i = -10; i <= 29; i++){
//     console.log(i);
// }

// //**********Imprima todos os números pares entre 1 e 40. Usando FOR LOOP */

// for(let i = 2; i <= 40; i+= 2){
//     console.log(i);
// }
// // OU
// for(let i = 1; i <= 40; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// //** Imprima todos os numeros impares entre 300 e 333. usando o for loop */
// for(let i =  301; i <= 333; i += 2){
//     console.log(i);
// }

// // // OU
// for(let i = 300; i <= 333; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// // Imprima todos os numeros divisiveis por 5 e 3 que estejam entre 5 e 50. use o for loop

// for(let i = 5; i <= 50; i++){
//     if((i % 5 == 0) && (i % 3 == 0)){
//         console.log(i);
//     }
// }

// arr.forEach
