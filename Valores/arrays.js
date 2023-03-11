/**
 * Arrays são variedades que podemos guardar coisas dentro
 * sejam elas strings, numeros, funções, outras arrays, objetos
 * booleanos, elas guardam tudo
 *
 * Ex:
 */

var ArrayComQualquerCoisa = [
  "Eu sou um texto",
  1234,
  {},
  function EuSouUmaFunção() {
    return "Opa eu sou uma função dentro de uma Array";
  },
  [],
];

console.log(ArrayComQualquerCoisa);

/**
 * Quando utilizamos uma array devemos lembrar que ela não começa com o item 1,2,3,4...
 * Ela sempre começa com 0, e chamamos estes números de indices
 *
 * Por exemplo, se quisermos buscar nosso texto, que está no primeiro item, utilizamos
 * o indice 0, e para buscar isso utilizamos os colchetes abrindo e fechando para dentro
 * e dentro dos dois colocamos o indice que queremos buscar
 */
console.log(ArrayComQualquerCoisa[0]);
console.log(ArrayComQualquerCoisa[1]);
console.log(ArrayComQualquerCoisa[2]);

/**
 * Quando chamamos algo em uma array, este retorno se torna o tipo que está sendo
 * guardado dentro da array.
 *
 * Isto é, se no indice 0 tivermos uma string, o tipo ArrayComQualquerCoisa[0]
 * será string
 *
 * Se no indice 1 tivermos um numero, o tipo ArrayComQualquerCoisa[1]
 * será number
 */

console.log(typeof ArrayComQualquerCoisa[0]);
console.log(typeof ArrayComQualquerCoisa[1]);
console.log(typeof ArrayComQualquerCoisa[2]);
console.log(typeof ArrayComQualquerCoisa[3]);

/**
 * Como o que buscamos torna o ArrayComQualquerCoisa o tipo do que buscamos
 * se quisermos, podemos chamar a função que está no indice 3, e usala
 */

console.log(ArrayComQualquerCoisa[3]());

/**
 * Se quisermos filtrar uma array podemos utilizar a função filter
 * que recebe um argumento, e esse argumento deve ser uma função
 * que recebe dois argumentos, sendo o primeiro argumento o item
 * e o segundo o indice e ele deve retornar o item filtrado
 *
 * Ex:
 */

var arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** Agora eu vou filtrar a arrayDeNumeros para que só retorne
 * números abaixo ou igual a 5
 */

function funçãoDaArray(item, index) {
  /**
   * O que é o item e o index?
   *
   * O argumento item, é o item da array
   * O filter ele manda para a função cada item e a posição dela dentro da array
   */
  console.log(`O item: ${item}, está na posição ${index} da array`);

  //Se o item que está vindo for menor ou igual a 5
  if (item <= 5) {
    //retorna-lo
    return item;
  }
}
var novaArrayDeNumeros = arrayDeNumeros.filter(funçãoDaArray);

console.log(novaArrayDeNumeros);

/**
 * Se quisermos, podemos executar o filter sem criar uma array fora,
 * e sim dentro do filter
 */

var novaArrayDeNumeros1 = arrayDeNumeros.filter(function (item, index) {
  if (item <= 5) {
    return item;
  }
});

console.log(novaArrayDeNumeros1);

/**
 * Outro exemplo, desta vez filtrando somente quem tiver o nome
 * Azul no texto
 */

var arrayComVariosTextos = [
  "Meu carro é azul",
  "Minha bicicleta é rosa",
  "Minha moto é vermelha",
  "Meu patinete é azul",
  "Eu possuo um camarão azul",
  "Eu tenho um peixe preto",
  "Eu já vi o sol ficar azul",
];

var arrayComSomenteAzul = arrayComVariosTextos.filter(function (item, index) {
  if (item.includes("azul")) {
    return item;
  }
});

console.log(arrayComSomenteAzul);

var arrayComSomenteRosa = arrayComVariosTextos.filter(function (item, index) {
  if (item.includes("rosa")) {
    return item;
  }
});

console.log(arrayComSomenteRosa);

/**
 * Também temos a possibilidade se quisermos, de mapear uma array
 * e retornar novos valores nessa array, com as condições que quisermos
 * para isso fazemos que nem o filter, mas ao invés de filter colocamos map
 *
 * Ex:
 */

var arrayComVariosGatos = [
  "Gato siamês",
  "Gato chinês",
  "Gato Oriental",
  "Gato Mexicano",
  "Gato Brasileiro",
];

var arrayComGatoESexo = arrayComVariosGatos.map(function(item, index){
  return `${item} do sexo Masculino`
})

console.log(arrayComGatoESexo)
