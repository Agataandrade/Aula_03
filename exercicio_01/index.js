const readline = require("readline-sync");


let numero1 = Number(readline.question("Digite o primeiro numero do intervalo: "));
let numero2 = Number(readline.question("Digite o ultimo numero do intervalo: "));


if (numero1 >= numero2) {
  console.log("\nIntervalo inválido!");
} else {
  console.log(`\nNo Intervalo entre ${numero1} e ${numero2}:\n`);

  for (let i = numero1 + 1; i < numero2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é múltiplo de 3 e 5`);
    }
  }
}