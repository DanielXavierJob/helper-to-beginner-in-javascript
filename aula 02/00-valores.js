/**
 * Para mostrar os resultados dos valores, iremos utilizar o console.log
 * Você pode ver mais no arquivo "nativos.js"
 * No javascript possuimos varios tipos de valores, são eles:
 * 
 * string
 * number
 * boolean
 * array
 * object
 * function
 * 
 * Podemos facilmente ver o tipo de uma variavel, utilizando typeof
 * ex:
 * typeof "Eu sou uma string"
 * ela retornará "string"
 * 
 * Cada tipo de valor corresponde a algum desses tipos, por exemplo
 * o texto "Olá mundo" possui o tipo string 
 * (Que em português significa texto)
 * 
 * já o valor true ou false possui o tipo boolean
 * (Que em português significa verdadeiro ou falso, e o tipo booleano)
 * 
 * já o valor 1234 possui o tipo number
 * (Que em português significa numero)
 * ´
 * Já o valor [1,2,3,4] possui o tipo array
 * (Que em português significa variedade)
 * 
 * Já o valor {} possui o tipo object
 * (Que em português significa objeto)
 * 
 * Já o valor function(){} possui o tipo function
 * (Que em português significa função)
 */

/**
 * Mais exemplos
 */



// ==============================
// STRINGS
// ==============================

var euSouUmaStringComAspasDuplas = "Olá mundo"
var euSouUmaStringComAspasSimples = 'Olá mundo'
var euSouUmaStringComCrases = `Olá mundo`

console.log(typeof euSouUmaStringComAspasDuplas)
console.log(typeof euSouUmaStringComAspasSimples)
console.log(typeof euSouUmaStringComAspasSimples)

/**
 * Pode parecer que não, mas as strings com aspas diferentes possui 
 * sim diferença! Quer dizer, a dupla e a simples são a mesma coisa
 * mas a com crases não, porque ela possui uma opção especial!
 * a concatenação. Você poderá ver melhor na pasta Valores
 * no arquivo strings.js
 */

// ==============================
// BOOLEAN
// ==============================

var euSouUmBoleanoTrue = true
var euSouUmBoleanoFalse = false

console.log(typeof euSouUmBoleanoTrue)
console.log(typeof euSouUmBoleanoFalse)

// ==============================
// NUMBER
// ==============================

var euSouUmNumber= 1234

console.log(typeof euSouUmNumber)


// ==============================
// ARRAY
// ==============================

var euSouUmArray= [1,2,3,4]

console.log(typeof euSouUmArray)

/**
 * Object??? Mas porque não está mostrando uma array?
 * porque no javascript, o ARRAY assim como o OBJECT
 * é reconhecido da mesma forma, mesmo sendo diferentes
 * Para descobrirmos se ela realmente é uma array
 * podemos utilizar isto
 * euSouUmArray instanceof Array
 * que retornará verdadeiro(true) se for uma array e falso(false) se não for
 */

console.log(euSouUmArray instanceof Array)

// ==============================
// OBJECT
// ==============================

var euSouUmObject= {}

console.log(typeof euSouUmObject)

/**
 * Se tentarmos fazer o que fizemos acima com a array
 * ele nos retornará falso(false), porque o objeto não é uma array
 */

console.log(euSouUmObject instanceof Array)


// ==============================
// FUNCTION
// ==============================

function euSouUmaFunção(){

}

console.log(typeof euSouUmaFunção)