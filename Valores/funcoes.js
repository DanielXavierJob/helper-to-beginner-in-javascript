/** Com as funções podemos fazer tudo que queremos
 * Podemos retornar valores, fazer coisas, fazer muitas coisas!
 *
 * Para criar uma função podemos utilizar três tipos
 * as functions natives que são assim:
 *
 * function nome_da_função(argumentos){
 *
 * }
 *
 * Ou podemos utilizar as arrow functions, que são chamados assim
 *
 * const nome_da_função = (argumentos) => {
 *
 * }
 *
 * E podemos criar funções anonimas, são elas funções que não podem ser chamadas
 * e que são executadas automaticamente, que fazemos assim:
 *
 * (function(){
 *
 * })()
 *
 * A diferença entre as functions natives e arrow functions, é que fazendo com function,
 * podemos chamar ela antes dela ser criada,
 * Ex:
 *
 * var chamada = executarAlerta("Eu sou um alerta")
 *
 * function executarAlerta(mensagem){
 *  alert(mensagem)
 * }
 *
 */

var executar = executarAlerta("teste");

console.log(executar);

function executarAlerta(mensagem) {
  return mensagem;
}

/**
 * diferente da arrow function, que só podemos chamar ela
 * depois que ela foi criada, o que nos dá mais segurança de nosso código ser
 * executado somente quando tudo estiver carregado
 * O erro gerado será:
 * var executar1 = executarAlerta1("teste") -> Cannot access 'executarAlerta1' before initialization
 */

// var executar1 = executarAlerta1("teste")

// console.log(executar1)

// const executarAlerta1 = (mensagem) => {
// return mensagem;
// }

/**
 * Além disto tudo as funções elas podem retornar valores se quisermos
 * utilizamos o return para retornar o que queremos
 * seja ele uma string, um boolean, um objeto, array, outra função
 * para tudo isso utilizamos o return
 *
 * Ex:
 *
 * function funçãoRetornarTexto(){
 *
 * return "Eu sou um texto"
 *
 * }
 *
 * function funçãoRetornarNumero(){
 *
 * return 1234
 *
 * }
 *
 * function funçãoRetornarOutraFunção(){
 *
 * return function OutraFuncao(){
 *
 * }
 *
 * }
 *
 * As funções elas recebem argumentos, você consegue especificar quantos
 * argumentos esta função vai receber separando-os por virgula, ex:
 */
function funçãoQueSoRecebeUmArgumento(argumento) {
  return `Eu recebi um argumento, o argumento é: ${argumento}`;
}
console.log(funçãoQueSoRecebeUmArgumento("bola"));

function funçãoQueRecebeDoisArgumentos(argumento1, argumento2) {
  return `Eu recebi dois argumentos, argumento1 é: ${argumento1} e o argumento2 é: ${argumento2}`;
}
console.log(funçãoQueRecebeDoisArgumentos("bola", "gato"));

function funçãoQueRecebeTrêsArgumentos(argumento1, argumento2, argumento3) {
  return `Eu recebi três argumentos, argumento é: ${argumento1} e o argumento2 é: ${argumento2}, e o argumento3 é: ${argumento3}`;
}
console.log(funçãoQueRecebeTrêsArgumentos("bola", "gato", "mingau"));

/**
 * Se quisermos receber muuuitos argumentos e não quisermos especificar isso
 * diretamente, podemos chamar ...argumentos que basicamente serve para buscar
 * infinitos argumentos, tudo dentro de um só
 *
 * Obs: o nome "argumentos" irá vir como uma array, contendo todos os argumentos
 * passados, dessa forma, você decide como irá utiliza-lo
 *
 * Ex:
 */

function funçãoComMuitosArgumentos(...argumentos) {
  console.log(argumentos);
  return `Eu recebi muuitos argumentos, são eles: ${argumentos.join(",")}`;
}

console.log(funçãoComMuitosArgumentos("bola", "peixe", "gato", "azul"));

/**
 * Exemplo muuuito prático utilizando os infinitos argumentos para somar
 * dinamicamente
 * utilizando a função reduce, ela pega cada dado em uma array e irá
 * executar o que queremos
 * por exemplo, eu defini que o valor padrão do reduce será 0,
 * e dentro dele eu passei uma função sem nome (significa que é anonima)
 * que recebe o numero anterior no caso se eu tiver uma array com
 * [1,2,3]
 *
 * o numero anterior será 0 (porque é o valor padrão do reduce)
 * quando eu executar o return numeroAnterior + numeroAtual
 * o numero anterior será 0, e returno numero atual será 1
 * 0+1 = 1
 * então agora o novo numero padrão será 1
 *
 * agora ela irá para o numero 2 da array
 *
 * o numero anterior será 1, e o numero atual será 2
 * 1+2 = 3
 * então agora o novo numero padrão será 3
 *
 * agora ela irá para o numero 3 da array
 *
 * o numero anterior será 3 e o numero atual será 3
 * 3+3 = 6
 * agora o novo numero padrão será 6
 * e ela fará isso até acabar todos os numeros da array
 * após terminar, ela retornará o valor padrão para a gente
 */

function somar(...numeros) {
  console.log(numeros)
  return numeros.reduce(function (numeroAnterior, numeroAtual) {
    return numeroAnterior + numeroAtual;
  }, 0);
}

console.log(somar(1, 2, 3));

/**
 * Como seria para uma função retornar outra função?
 */

function funçãoQueRetornaOutraFunção() {
  return function teste() {
    return "Opa você acaba de chamar uma função dentro de uma função!";
  };
}

const funçãoTeste = funçãoQueRetornaOutraFunção();
console.log(funçãoTeste());

/**
 * E como seria utilizando o arrow functions?
 */

const funçãoQueChamaOutraFunçãoComArrowFunctions = () => {
  return (teste = () => {
    return "Opa! Eu sou uma função dentro de uma função!";
  });
};

const funçãoTesteArrowFunction = funçãoQueChamaOutraFunçãoComArrowFunctions();

console.log(funçãoTesteArrowFunction());
