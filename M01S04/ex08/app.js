let i = 1;

while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }
  i++;
  // i = i +1;
}

// let number = prompt('Introdu numarul');
// while (number === '' || number === null) {
//   number = prompt('Introdu totusi un numar');
// }
// console.log(number);

console.warn(
  `5. Modifica exemplul astfel incat bucla sa numere de la 1 la 67.`,
);

let a = 1;

while (a < 100) {
  console.log(a);

  if (a === 67) {
    break;
  }
  a++;
  // i = i +1;
}

console.warn(`
6. Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
`);

let b = 1;

while (b < 100) {
  console.log(b);

  if (b === 66) {
    break;
  }
  b++;
}

console.warn(`
7. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);

let c = 1;

while (c < 100) {
  console.log(c);
  if (c === 12) {
    break;
  }
  c++;
}

console.warn(`8. Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);

let d = 1;

while (d < 100) {
  console.log(d);

  if (d % 2) {
    continue;
  }

  d++;
}

// console.warn(`
// 9. Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
// `);
