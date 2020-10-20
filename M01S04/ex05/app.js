let testNumber = prompt('Introdu un numar');

if (testNumber === null || testNumber === '' || isNaN(testNumber)) {
  testNumber = 2;
  // testNumber = Number(testNumber);
  console.warn(`Nu ai introdus un numar. Se va folosi numarul ${testNumber}`);
}

for (let i = 0; i <= 6; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
