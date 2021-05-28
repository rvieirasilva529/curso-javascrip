// Codigo para Testes

let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;

while (resto >= 1){
  let nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}

console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");

//**=====================================OUUU================================== */
// esse codigo funciona no Browser
v = 576
console.log(v)
cem = 0;
cinquenta = 0;
vinte = 0;
dez = 0;
cinco = 0;
dois = 0;
um = 0;


while ( v > 0 ){
    if (v >= 100) {
        cem ++
        v -= 100
    } else if (v >= 50){
        cinquenta ++
        v -= 50
    } else if (v >= 20) {
        vinte ++
        v -= 20
    }else if (v >= 10) {
        dez ++
        v -= 10
    }else if (v >= 5) {
        cinco ++
        v -= 5
    }else if (v >= 2) {
        dois++
        v -= 2
    }else if (v >= 1) {
        um++
        v -= 1
    }else if (v == 0) {
        rest = v
        v -= rest
    }
}

console.log(cem + " nota(s) de R$ 100,00")
console.log(cinquenta + " nota(s) de R$ 50,00")
console.log(vinte + " nota(s) de R$ 20,00")
console.log(dez + " nota(s) de R$ 10,00")
console.log(cinco + " nota(s) de R$ 5,00")
console.log(dois + " nota(s) de R$ 2,00")
console.log(um + " nota(s) de R$ 1,00")