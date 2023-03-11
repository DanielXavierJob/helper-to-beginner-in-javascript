// ==============================
// STRINGS
// ==============================

var euSouUmaStringComAspasDuplas = "Olá mundo"
var euSouUmaStringComAspasSimples = 'Olá mundo'
var euSouUmaStringComCrases = `Olá mundo`

console.log(typeof euSouUmaStringComAspasDuplas)
console.log(typeof euSouUmaStringComAspasSimples)
console.log(typeof euSouUmaStringComAspasSimples)


// CONCATENAÇÃO

/**
 * A concatenação nada mais é do que juntar algo com outra coisa
 * Ex:
 */

console.log(euSouUmaStringComAspasDuplas + " " + euSouUmaStringComAspasSimples)

/**
 * Juntei a variavel euSouUmaStringComAspasDuplas com uma string espaço com depois
 * a variavel euSouUmaStringComAspasSimples
 */

/**
 * Com as novas atualizações do javascript, veio as crases com a incrivel concatenação
 * sem precisar colocar + e as outras variaveis, agora podemos inserir dentro de um texto
 * utilizando ${} dentro do texto mesmo
 * Ex:
 */

console.log(`Eu sou um texto`)
console.log(`Eu sou um texto concatenando ${euSouUmaStringComAspasDuplas} ijik`)

//Que se fosse com aspas duplas ou simples, precisariamos fazer isto:
console.log("Eu sou um texto concatenando " + euSouUmaStringComAspasDuplas + " ijjk")



/**
 * Outra coisa que podemos fazer que é util é saber qual o tamanho
 * de nossa string utilizando o length
 * 
 * Obs: O espaço entre as palavras também conta, assim como qualquer
 * caractere dentro da string
 * Ex:
 */

console.log(euSouUmaStringComAspasDuplas.length)

/**
 * Podemos verificar se em nossa string ela possui algo que queremos
 * por exemplo, verificar se na variavel existe o nome "mundo"
 * utilizaremos a função includes passando o argumento que queremos
 * saber se inclui no texto
 */

console.log(euSouUmaStringComAspasDuplas.includes("mundo"))

// Caso a palavra que estamos buscando não inclua no texto, ela retornará false

console.log(euSouUmaStringComAspasDuplas.includes("pipoca"))


/**
 * Também conseguimos substituir uma palavra, frase, ou até mesmo textos 
 * por outra palavra/frase ou texto
 * para isso utilizaremos a função replace para substituir uma vez
 * caso quisermos substituir em todo o texto todas as ocorrencias da palavra
 * que dissermos, utilizamos a função replaceAll
 * 
 * Na função replace e replaceAll, passamos dois parametros
 * o primeiro vai ser a palavra/frase ou texto que queremos substituir
 * e o segundo vai ser o que queremos que ele coloque no lugar das palavras
 * que pedimos para que ele substitua
 * 
 * Ex:
 */

var euSouUmaStringComMuitasPalavras = "eu tenho vários cachorros e um cachorro se chama Juquinha"

console.log(euSouUmaStringComMuitasPalavras.replace("cachorro", "gato"))

/** Veja que com o replace ele substituiu a primeira ocorrência de cachorro 
 * "eu tenho vários (cachorro)s e um cachorro se chama Juquinha"
 * mas não substituiu a segunda ocorrência, para isso utilizamos a função
 * replaceAll
 */
console.log(euSouUmaStringComMuitasPalavras.replaceAll("cachorro", "gato"))

/**
 * Se quisermos, também conseguimos separar nossa string de acordo com uma palavra
 * frase texto, ou caractere, para isso utilizamos a função split
 * que recebe um parametro que é o delimitador
 * 
 * Isto é, o que queremos que ele separe para a gente
 * 
 * Quando separado, ele muda de string para uma array de strings
 * Ex:
 */

var euSouUmaStringComDoisGatos = "eu sou um gato siamês, eu sou um gato persa"

var stringComSplit = euSouUmaStringComDoisGatos.split(',')
console.log(stringComSplit)

/**
 * Separamos nossa string com dois gatos para uma array, com cada gato separado
 * Dessa forma, conseguimos buscar o primeiro gato, ou o segundo, sem precisar
 * chamar todos os gatos
 */
console.log(stringComSplit[1])

/**
 * Com isso conseguimos se quiser, alterar a mensagem "eu sou um gato persa"
 * para "eu sou um gato chinês" com muita mais facilidade
 */

stringComSplit[1] = "eu sou um gato chinês"

console.log(stringComSplit)

/**
 * Se quiser também podemos adicionar mais um gato utilizando a função push
 * que recebe um parametro sendo ele o que você quer adicionar
 * neste caso vamos adicionar um gato chamado cerveja
 */
stringComSplit.push("eu sou um gato com o nome Cerveja")
console.log(stringComSplit)


/**
 * Para unir de volta essa Array de string, utilizamos a função join
 * e passamos nela o parametro que queremos que seja nosso delimitador
 * isto é, o caractere que queremos que ele coloque no meio das strings
 * 
 * Ex:
 */

console.log(stringComSplit.join(', '))


/**
 * Também podemos verificar qual é o começo de uma string
 * 
 * Para isso utilizamos o startsWith e passamos como parametro
 * o que queremos vericar se está no começo da string
 * Ex:
 */

var euComeçoComOlaETerminoComVida = "Ola, eu amo minha vida"

console.log(euComeçoComOlaETerminoComVida.startsWith("Ola"))

/**
 * se Quisermos, podemos também verificar se a string termina com
 * uma palavra/frase ou texto. Para isso utilizamos o endsWith
 * e passamos como argumento o que queremos verificar
 */

console.log(euComeçoComOlaETerminoComVida.endsWith("vida"))

/**
 * Podemos fazer com que uma string comece com algo sempre que
 * ela exceder o tamanho que especificarmos, para isso, utilizamos
 * a função padStart e passamos dois argumentos, são eles:
 * 
 * Primeiro argumento: Tamanho para adicionar o que queremos se a
 * string ultrapassar
 * (Obs: o tamanho precisa ser o tamanho que especificarmos como limite mais 
 * o tamanho do que queremos adicionar junto)
 * Ex:
 * Eae (tem tamanho 3)
 * Olá (tem tamanho 3)
 * 
 * Então será preciso passar o numero 6
 * (Obs: o espaço que você dá entre as palavras também é um caractere então
 * conta no numero)
 * Segundo argumento: O que queremos que ele adicione a string
 * 
 * Ex:
 */

let euTenhoTamanhoTrês = "Eae"

console.log(euTenhoTamanhoTrês.padStart(8, "Opa! "))

/**
 * Se quisermos, podemos adicionar ao final da string
 */
console.log(euTenhoTamanhoTrês.padEnd(8, " Opa!"))


/**
 * Uma das coisas que também conseguimos fazer é deixar a string
 * toda em maiúscula ou toda em minuscula
 * para deixar em maiúscula utilizamos a função toUpperCase
 * ou para deixar em minuscula utilizamos a função toLowerCase
 * 
 * Ex:
 */

var euSouUmaStringNormal = "Olá tudo bom?"

console.log(euSouUmaStringNormal.toUpperCase())
console.log(euSouUmaStringNormal.toLowerCase())

