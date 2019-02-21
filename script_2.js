let input = prompt("De quel nombre veut tu calculer la factorielle ?");
function factorial(num) {
    let result = num;
    // Traite le cas de input = 1 ou 0
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
    // A chaque itération de la boucle, num perd 1. La boucle se bloque sur le résultat final quand num atteint 1.      
      num--;
      result *= num;
    }
    return result;
  }
  factorial(input);
console.log("Le résultat est :" + factorial(input))