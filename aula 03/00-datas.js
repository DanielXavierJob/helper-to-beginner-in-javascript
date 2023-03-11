/**
 * Utilizando uma das funções nativas do javascript
 * o Date
 * conseguimos buscar a data atual ou de qualquer tempo
 * como um objeto, e com ele podemos manipular esta data
 * para buscar o dia, hora, mês, ano ou até os mili segundos
 */

var data = new Date();

console.log(data);

//Quando quiser-mos buscar ano, mês, dia, hora, minutos ou segundos ou até mili segundos, utilizamos o:
console.log("Para mili segundos: ", data.getMilliseconds());
console.log("Para segundos: ", data.getSeconds());
console.log("Para minutos: ", data.getMinutes());
console.log("Para horas: ", data.getHours());
console.log("Para dias: ", data.getDay());
console.log("Para mês: ", data.getMonth());
console.log("Para ano: ", data.getFullYear());
