// Criar um Array com numeros randomicos não repetidos
function generateRandomInterger(max){
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20){
    let randomNumber = generateRandomInterger(30)
   

    if(arr.indexOf(randomNumber) <0 ){
        arr.push(randomNumber)
    } else{
        console.log(randomNumber, "já existe no array")
    }
}
console.log(arr)