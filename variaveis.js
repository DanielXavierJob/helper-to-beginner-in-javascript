/**
 * As variaveis são "caixas" onde guardamos o que queremos
 * são elas var e let e const
 * parar criar uma variavel você utiliza o var e da um nome a ela
 * por exemplo:
 */

/**
 * quando utilizamos o var, dizemos que ela estará disponivel para todo
 * nosso código, desde que quando chamar ela, seja depois de ter atribuido
 * ao código, geralmente quando é feito uma variavel utilizando o var
 * elas são atribuidas logo no inicio do código
 */
var euSouUmaVariavel;

/**
 * quando utilizamos o const, dizemos que ela irá ser uma constante,
 * isto significa que ela não pode mudar seu valor, independente do que
 * aconteça, muito utilizada para guardar valores importantes, como senha
 * para acessar banco de dados, urls e etc.
 */

const senha = "1234";

/**
 * Quando utilizamos o let, dizemos que ela estará disponivel em todo o bloco
 * de código que iremos utilizar, por exemplo, se tivermos uma função e colo
 * carmos uma variavel let dentro da função, ela estará disponivel em qualqu
 * er lugar da função, mas fora ela não estará disponivel, assim como também
 * se colocarmos fora da função, ela estará disponivel em todo código
 *
 *
 * Obs: Bloco de código é onde se encontra a variavel, se ela estiver dentro
 * de uma função, a função é seu bloco de código
 * se ela estiver fora de tudo (estiver jogada pelo arquivo)
 * o arquivo será seu bloco de código
 */

let euSouUmaVariavelDeBloco;
// ou
function umaFunçãoQualquer() {
  let euSouUmaVariavelDeBlocoEmUmaFunção;
}
