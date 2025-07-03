const readline = require("readline-sync");

let menores21 = 0;
let maiores50 = 0;

while (true) {
    let idade = parseInt(readline.question("Informe uma idade:"));

    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        menores21++;
    } else {
        if (idade > 50) {
            maiores50 ++;
        }
    }
}




console.log("Quantidade de pessoas com menos de 21 anos: " + menores21);

console.log("Quantidade de pessoas com mais de 50 anos: " + maiores50);
