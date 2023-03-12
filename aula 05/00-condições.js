/**
 * Quando trabalhamos com condições, utilizamos o if 
 * para "se" a condição for verdadeira ela executar parte de um código que queremos
 * 
 * Ex:
 */

var cor = "amarelo"


// SE COR FOR IGUAL A STRING "amarelo" EXECUTAR O CÓDIGO DENTRO DAS CHAVES
if(cor == "amarelo"){
  console.log("Eu sou a cor amarela")
}

/**
 * Quando a condição não é verdadeira, podemos também executar outro código
 * para isso utilizamos o else
 * 
 * Ele basicamente serve para que se em nossa condição dentro do IF retornar false
 * ele vá para o else e execute um código que queremos
 * 
 * Ex:
 */

if(cor == "branco"){
  console.log("Eu sou a cor branca")
}else{
  console.log(`Oops! eu não sou branco! Eu sou ${cor}`)
}

/**
 * Quando quisermos executar mais de uma condição, podemos utilizar o else if
 * 
 * ele sempre virá antes do else final, desta forma podemos percorrer varias
 * condições, antes de chegar no else que retornará dizendo que ele não é a cor
 * que queremos
 * 
 * Ex:
 */


if(cor == "branco"){
  console.log("Eu sou a cor branca")
}else if(cor == "vermelho"){
  console.log("Eu sou a cor vermelho")

}else if(cor == "azul"){
  console.log("Eu sou a cor azul")
}else{
  console.log(`Oops! eu não sou nenhuma dessas cores! Eu sou ${cor}`)
}


/**
 * Outra forma de utilizarmos uma condição é com o switch
 * ele trabalha com cases, nós informamos ao switch o que ele vai receber
 * e informamos em cada case o valor que procuramos, se o que o switch receber
 * for o valor de algum dos cases, ele executa o código dentro do case.
 * 
 * Ex:
 */

switch(cor){
  case "amarelo":
    console.log("Eu sou amarelo!")
    break;
  case "azul":
    console.log("Eu sou azul!")
    break;
  case "branco":
    console.log("Eu sou branco!")
    break;
}

/**
 * Se nós não utilizarmos o break; dentro de cada case, ele continuará
 * entrando nos cases mesmo que não seja o valor correspondente
 * 
 * Ex:
 * 
 * Queremos que exiba somente o do amarelo
 */

switch(cor){
  case "amarelo":
    console.log("Eu sou amarelo!")
  case "azul":
    console.log("Eu sou azul!")
  case "branco":
    console.log("Eu sou branco!")
}

/**
 * Para exibir valores que não estão nos cases, utilizamos o default:
 * 
 * ele irá basicamente atuar como o else do tipo de condição "IF"
 * 
 * Ex:
 */

switch(cor){
  case "ciano":
    console.log("Eu sou amarelo!")
    break;
  case "azul":
    console.log("Eu sou azul!")
    break;
  case "branco":
    console.log("Eu sou branco!")
    break;
  default:
    console.log(`Eu não sou nenhuma das cores que você está procurando, eu sou ${cor}`)
    break;
}
