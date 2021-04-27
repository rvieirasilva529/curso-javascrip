// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let minhaVar = "Minha String"
let minhaVar2 = 'minha \"string\" com aspas simples';
console.log(minhaVar2);
var minhaVar3 = `minha template literal`;
console.log(minhaVar3);

let idade = 40;
//let msg = "eu possuo " + idade + " anos";
let msg = `eu possuo ${idade} anos`;


console.log(msg);
console.log("hello "+"Wold");
console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20);

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`);

const isValid = false;
console.log(`isValid: ${isValid}`);

let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);


