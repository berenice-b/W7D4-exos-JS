let input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function pyramid(num) {
    let i;
    for (i = 1; i <= num; i++) {
        console.log(" ".repeat(num - i)+"#".repeat(i))};
    }

console.log(pyramid(input))