// - Sumário
// - O objeto Array do Javascript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
// - Principais características de um Array em javascript:
// - São objetos que tem, nativamente, diversos métodos embutidos para realizar diversos tipos de operação.
// - São heterogêneos (aceitam diversos tipos de dados dentro da mesma lista - inclusive outros arrays e objetos)
// - Não tem tamanho fixo ( o tamanho pode ser alterado a qualquer momento)
// - Dados não são necessariamente armazenados contiguamente - podem ser densos (contíguos) ou esparsos (espaçado)
// - Índices são acessados por meio de números a partir do 0. exemplo: arr[0] - arr[1] - arr[2] ...
// - Acessamos o tamanho do Array por meio da propriedade nativa "length", exemplo: arr.length

// - Criando um Array de forma literal
//let frutas = []
// ou
let frutas = ['Maçã', 'Banana']

console.log('Existe ' + frutas.length + ' elementos no Array Frutas, com os seguntes itens: ' + frutas)

// Exemplo de Array denso:
const arrDenso = [1, 2, 3, 4, 5, 6]

// Exemplo de Array esparso:
const arrEsparso = [1,,,3]

// Tornando-o esparso por meio de insersão posterior:
arrEsparso[10] = 10

// Deletar elementos de um Array:
const arrDel = ['a', 'b', 'c', 'd']
delete arrDel[2]
console.log(arrDel)
/* O delete não retira o espaço ocupado pelo elemento, apenas exclui o dado que estava nesse espaço, e colaca
'undefined' no lugar.*/