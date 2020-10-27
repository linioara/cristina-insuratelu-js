let testNumber = prompt('Introdu un numar');

if (testNumber === null || testNumber === '' || isNaN(testNumber)) {
  testNumber = 2;
  // testNumber = Number(testNumber);
  console.warn(`Nu ai introdus un numar. Se va folosi numarul ${testNumber}`);
}

for (let i = 0; i <= 1000; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}

console.warn(
  `Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.`,
);

let maxNumber = prompt('Introdu numarul maxim pana la care cautam multiplii');
if (maxNumber === null || maxNumber === '' || isNaN(maxNumber)) {
  maxNumber = 20;
  // maxNumber = Number(maxNumber);
  console.warn(`Nu ai introdus un numar. Se va folosi numarul ${maxNumber}`);
}

for (let i = 0; i <= maxNumber; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
