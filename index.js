// Questão 01
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
// O resultado impresso será 91


// Questão 02
function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
      }
      let proximo = a + b;
      a = b;
      b = proximo;
    }
  
    return `${numero} não pertence à sequência de Fibonacci.`;
  }
  
  console.log(verificarFibonacci(5)); // 5 pertence à sequência de Fibonacci.
  console.log(verificarFibonacci(8)); // 8 pertence à sequência de Fibonacci.
  console.log(verificarFibonacci(13)); // 13 pertence à sequência de Fibonacci.
  console.log(verificarFibonacci(21)); // 21 pertence à sequência de Fibonacci.
  console.log(verificarFibonacci(25)); // 25 não pertence à sequência de Fibonacci.


// Questão 03
// a) A lógica é somar 2 ao elemento anterior. Portanto, o próximo elemento é 9.

// b) A lógica é multiplicar por 2 o elemento anterior. Portanto, o próximo elemento é 128.

// c) A lógica é elevar ao quadrado o índice do elemento e subtrair 1. Por exemplo, o segundo elemento é 1² - 1 = 0, o terceiro elemento é 2² - 1 = 3, o quarto elemento é 3² - 1 = 8, e assim por diante. Portanto, o próximo elemento é 49.

// d) A lógica é elevar ao quadrado o número do índice do elemento. Por exemplo, o primeiro elemento é 2² = 4, o segundo elemento é 4² = 16, o terceiro elemento é 6² = 36, e assim por diante. Portanto, o próximo elemento é 100.

// e) A lógica é somar os dois elementos anteriores para obter o próximo elemento. Portanto, o próximo elemento é 13.

// f) 200. Todos os números começam com a letra D.

// Questão 04
const distanciaTotal = 100; // km
const velocidadeCarro = 110; // km/h
const velocidadeCaminhao = 80; // km/h
const tempoPedagioCaminhao = 0.0833; // 5 minutos em horas

// Distância percorrida pelo carro até o ponto de encontro
const distanciaCarro = distanciaTotal / 2;
// Tempo necessário para o carro percorrer essa distância
const tempoCarro = distanciaCarro / velocidadeCarro;
// Tempo necessário para o caminhão percorrer a mesma distância (considerando os pedágios)
const tempoCaminhao = (distanciaCarro / velocidadeCaminhao) + (tempoPedagioCaminhao * 2);

if(tempoCarro < tempoCaminhao) {
  console.log("O carro estará mais próximo da cidade de Ribeirão Preto");
} else {
  console.log("O caminhão estará mais próximo da cidade de Ribeirão Preto");
}

// Questão 05
// Definindo uma string
let str = "Hello, world!";

// Criando uma nova string para armazenar o resultado
let invertedStr = "";

// Loop para percorrer a string original de trás para frente
for(let i = str.length - 1; i >= 0; i--){
  // Adicionando cada caractere na nova string
  invertedStr += str[i];
}

// Imprimindo a string invertida
console.log(invertedStr);