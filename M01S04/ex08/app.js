let i = 1;

while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }
  i++;
  // i = i +1;
}

let number = prompt('Introdu numarul');
while (number === '' || number === null) {
  number = prompt('Introdu totusi un numar');
}
console.log(number);
