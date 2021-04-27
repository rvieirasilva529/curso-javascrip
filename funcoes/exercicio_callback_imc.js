/* CONSTRUIR UMA FUNÇÃO PARA CALCULAR IMC
REQUISITOS
IMC = Peso / altura²
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não númerico
Deve retornar erro caso não receba nenhum parâmetro   */

function calcularImc(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: weight and height")
    }
    let imc = peso / (altura * altura)
    if(typeof callback === "function"){
        return callback()
    }
    return imc
}

function classificaImc(imc){
    if(imc <= 16.9){
        return 'muito abaixo do peso';
    }else if(imc <= 18.4){
        return 'abaixo do peso';
    } else if(imc <= 24.9){
        return 'normal';
    } else if(imc <= 34,9){
        return 'acima do peso';
    } else if(imc <= 40){
        return 'obesidade 2';
    } else{
        return 'obesidade 3';
    }
}
let imc = calcularImc(74.50, 1.70)
let imc2 = calcularImc(74.50, 1.70, classificaImc())
console.log(imc)
console.log(imc2)
