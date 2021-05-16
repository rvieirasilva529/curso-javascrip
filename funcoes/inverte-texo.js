/*screva uma função que receba uma string de uma ou mais palavras e retorne a mesma string, mas com todas as
palavras de cinco ou mais letras invertidas (assim como o nome deste Kata). As strings passadas consistirão apenas
em letras e espaços. Os espaços serão incluídos apenas quando mais de uma palavra estiver presente.

Exemplos:

spinWords ("Ei companheiros guerreiros") => retorna "Ei wollef sroirraw" 
spinWords ("Isto é um teste") => retorna "Isto é um teste" 
spinWords ("Este é outro teste") => retorna "Este é um teste rehtona"*/


const spinWords = (phrase) => {
    console.log(phrase)
    
    let phraseArray = phrase.split(' ')
    console.log(phraseArray)
    
    const reverseString = (string) => {
      return string.split("").reverse().join("")
    }
    
    for (let i = 0; i < phraseArray.length; i++) {
      if (phraseArray[i].length >= 5) {
        const word = phraseArray[i]
        phraseArray[i] = reverseString(word)
      }
    }
    
    return phraseArray.join(' ')
  }