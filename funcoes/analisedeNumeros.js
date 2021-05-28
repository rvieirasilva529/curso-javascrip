/** 3 - Analise de Numeros */

pa = i = po = n = 0; //par, impar, positivo, negativo

for(c=0;c<5;c++){
    v = gets()
    v%2 == 0 ? pa++ : i++
    if(v!=0) v<0 ? n++ : po++
}

console.log(pa + " valor(es) par(es)\n"+
             i + " valor(es) impar(es)\n"+
            po + " valor(es) positivo(s)\n"+
             n + " valor(es) negativo(s)")