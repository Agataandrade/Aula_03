const readline = require("readline-sync");

let menores21 = 0;
let maiores50 = 0;

while (true) {
    let idade = parseInt(readline.question("Digite uma idade: "));

    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        menores21 += 1;
    } else {
        if (idade > 50) {
            maiores50 += 1;
        }
    }
}


console.log("");

console.log("Total de pessoas menores de 21 anos: " + menores21);
console.log("");
console.log("Total de pessoas maiores de 50 anos: " + maiores50);
