//criar um programa que mostre se o numero e positivo ou negativo

let num1 = 99
if (num1 > 0) {
    console.log("O numero é positivo")
} else if (num1 < 0) {
    console.log("O numero é negativo")
} 


//criar um programa que mostre se o ano e bissexto 
let ano = 2020
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("O ano é bissexto")
} else {
    console.log("O ano não é bissexto")
}


//criar um programa que mostre uma senha  e a mensagem ascesso permitivo

let senha = "12345"
if (senha === "12345") {
  console.log("Acesso permitido")
}else {  console.log("Acesso negado")
}

//Criar um programa para verificar se o número 12 é divisível por 2 e por 3.
let numero = 12;
if (numero % 2 === 0 && numero % 3 === 0) {
  console.log(" divisível por 2 e por 3.");
} else {
  console.log("não é divisível por 2 e por 3.");
}


//Criar um programa para mostrar um desconto de 12% para produtos acima de R$800.
let preco = 900
if (preco > 800) {
  let desconto = preco * 0.12;
  let precoComDesconto = preco - desconto;
  console.log("Preço com desconto: R$" + precoComDesconto.toFixed(2));
}


//Criar um programa que mostre os números de 1 a 10 usando laço de repetição.
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//Criar um programa para mostrar apenas os números pares entre 1 e 20.
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

//Criar um programa para mostrar a tabuada do 5.
let k = 1;
while (k <= 10) {
  console.log("5 x " + k + " = " + (5 * k));
  k++;
}


//Criar um programa para mostrar os números de 1 a 7 usando while.

let l = 1;
while (l <= 7) {
  console.log(l);
  l++;
}

//Criar um programa para mostrar a tabuada do 3 usando while.
let m = 1;
while (m <= 10) {
  console.log("3 x " + m + " = " + (3 * m));
  m++;
}


//Criar um programa para mostrar o fatorial de 5.
let n = 5;
let fatorial = 1;
while (n > 1) {
  fatorial *= n;
  n--;
}
console.log("Fatorial de 5: " + fatorial);


//Criar um programa para saber se o número 7 é primo.
let numeroPrimo = 7;
let ehPrimo = true;

if (numeroPrimo <= 1) {
  ehPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(numeroPrimo + " é um número primo.");
} else {
  console.log(numeroPrimo + " não é um número primo.");
}


//Criar um programa para calcular a potência de 2³.
let base = 2;
let expoente = 3;
let resultado = Math.pow(base, expoente);
console.log("2³ = " + resultado);
















