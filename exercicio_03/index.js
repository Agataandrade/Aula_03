const readline = require("readline-sync");

let somaPositivos = 0;

while (true) {
    let numero = Number(readline.question("Digite um número: "));

    if (numero === 0) {
        break;
    }

    if (numero > 0) {
        somaPositivos += numero;
    }
}


console.log("");

console.log("A soma dos números positivos é: " + somaPositivos);

