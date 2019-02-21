const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

/////////////// 1. Est-ce que tous les livres ont été au moins empruntés une fois ?
let count = 0
  books.forEach(book=> {
   if (book["rented"] !== 0)
   count++;
    
  });
  console.log(count + " livres ont été empruntés au moins une fois.");

/////////////// 2. Quel est livre le plus emprunté ?
  let maxBorrow = 0;
  let maxTitle;
  books.forEach(book => {
   if (book["rented"] > maxBorrow) {
   maxBorrow = book["rented"]
   maxTitle = book["title"]
}
})
console.log(maxTitle + " a été emprunté un maximum de " + maxBorrow + " fois.");

/////////////// 3. Quel est le livre le moins emprunté ?
let minBorrow = 100000;
  let minTitle;
  books.forEach(book => {
   if (book["rented"] < minBorrow) {
   minBorrow = book["rented"]
   minTitle = book["title"]
}
})
console.log(minTitle + " a été emprunté un minimum de " + minBorrow + " fois.");

/////////////// 4. Trouve le livre avec l'ID: 873495
  books.forEach(book=> {
   if (book["id"] == 873495 )
   console.log("Le livre correspondant à cet id s'intitule " + book["title"] + " !")
  });

  