// Objects

/**Um objeto é uma coleção de dados relacionados e/ou funcionalidades (que geralmente consistem em diversas variáves e
 * funções - que são chamadas propriedadees e métodos quando estão dentro de um objeto)  */

//Objetos podem ser inicializados usando new Object(), Object.creat() ou usando a forma notação literal.

//Inicializando um objeto usando a notação literal

// Declarando objeto de forma literal

const dotNotation = {
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metodo: function () {
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto."
    }
}

//Acessando a propriedade e o método:
console.log( dotNotation.prop1)
console.log( dotNotation.metodo())

// Declarando uma nova propriedade e depois um novo método:
dotNotation.prop2 = "Sou outra propriedade com valor tipo sting."
dotNotation.metodo2 = () => "Sou o retorno de outro método."

//Acessando os novos componentes:
console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())

// Uma outra forma de acessar componentes de um objeto é por meio da notação de colchete.

const bracketNotation = {
    prop1: "Sou uma propriedade que será acessada usando bracket notation.",
    metodo: function(){
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto."
    }
}

// // Acessando o elemento do objeto por meio do bracket notation:
// console.log( bracketNotation['prop1'])
// console.log( bracketNotation['metodo']())

// Declarando novas componentes do objeto:
bracketNotation['prop2'] = "Sou outra propriedade com valor do tipo string."
bracketNotation['metodo2'] = () => "Sou o retorno de outro método."

console.log ( bracketNotation['prop2'])
console.log (bracketNotation['metodo2']())