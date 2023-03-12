/**
 * Você está habituado com dois operadores,
 * o =
 * (que serve para atribuir um valor a algo)
 * 
 * e o ==
 * (que serve para perguntar se algo é igual a outro valor)
 * 
 * Ex:
 */

// atribuimos a string "amarelo" a variavel cor utilizando o "="
var cor = "amarelo"

// perguntamos se cor é igual a string "amarelo"
if(cor == "amarelo"){
  console.log("opa! Eu sou o amarelo!")
}

/**
 * Outro tipo de operador também muito utilizado é o 
 * ===
 * ele serve para perguntar se o algo é exatamente igual a outro valor
 * seja no valor, seja no tipo
 * 
 * diferente do ==, que verifica somente se os valores são iguais
 * 
 * Ex:
 */

var numeroEmString = "1"
var numeroEmNumber = 1

// Verificando se o valor da variavel numeroEmString possui o mesom valor em numeroEmNumber
if(numeroEmString == numeroEmNumber){
  console.log("Eu tenho os mesmos valores iguais!")
}

/**
 * O valor das duas variaveis são iguais, certamente!
 * Todavia por mais que seus valores sejam iguais, seus tipos são diferentes
 * 
 * a variavel numeroEmString possui o tipo string
 * a variavel numeroEmNumber possui o tipo number
 * 
 * porém quando chamamos os dois iguais (==) ele não verifica isso, somente se os 
 * valores são iguais.
 * 
 * Para chegar se os valores são iguais, e o tipo também, utilizamos então os três
 * iguais (===)
 * 
 * Ex:
 */

var numeroEmString = "1"
var numeroEmNumber = 1

//verificando se numeroEmString é exatamente igual no valor e no tipo igual no numeroEmNumber
if(numeroEmString === numeroEmNumber){
  console.log("Eu sou exatamente igual nas duas variaveis")
}else{
  console.log("Oops eu não sou igual!")
}

/**
 * Mesmo que os valore sejam iguais, o tipo não era igual...
 */
console.log(typeof numeroEmString)
console.log(typeof numeroEmNumber)

/**
 * Então, se chamarmos uma condição que se aplique tanto nos valores como nos tipos
 * conseguimos acessar o que queremos
 * 
 * Ex:
 */

var numero1 = 1
var numero2 = 1

if(numero1 === numero2){
  console.log("Sim! Eu tenho o mesmo valor, e o mesmo tipo!")
}else{
  console.log("Eu não tenho o mesmo valor e tipo")
}


/**
 * Operador &&
 * 
 * O operador && ele se lê "ê"
 * 
 * serve para nós aplicarmos uma condição junto com outra condição
 * 
 * Ex:
 */
var numero1 = 1
var numero2 = 1
var cor = "amarelo"
if(numero1 === numero2 && cor === "amarelo"){
  console.log("Os numeros são iguais, e a cor é amarela!")
}

/**
 * Operador ||
 * 
 * O operador || ele se lê "ou"
 * 
 * serve para nós aplicarmos uma condição se essa condição for false ela irá para a proxima condição sem sair do if
 * 
 * Ex:
 */
var numero1 = 1
var numero2 = 1
var cor = "amarelo"
if(numero1 === 2 || numero1 === 1){
  console.log("Sim, ou o numero é igual a dois, ou o numero é igual a 1")
}