/*Escreva uma função chamada menorNumero. Ela deve receber dois números como
parâmetro e retornar o menor entre eles. Caso os números sejam iguais, basta que se
retorne qualquer um deles.
Dica: A sua função deve ser definida (preparada) para receber dois parâmetros. Você
pode chamar esses parâmetros de a e b, por exemplo.
*/

function menorNumero(a,b) {
if(a < b){ 
  return a
} else {
  return b
}
}
menorNumero(3,5)