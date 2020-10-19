var messageParagraph = document.getElementById('message');

var value = window.prompt('Introdu o valoare');

var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
}

var message = `Valoare este ${value} si este ${word}.`;
messageParagraph.innerText = message;
// messageParagraph.textContent = message;

// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// // ternary operator
// var word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoare este ${value} si este ${word}.`);

// Tema (JS 01 S04 Ex01 -> continuam cu punctul 3)
// Folosind metoda prompt() afiseaza in pagina mesajul: “Numarul introdus este mai mic | mai mare decat 20.”

var messageParagraph2 = document.getElementById('message2');

var word2 = 'mai mic decat';

if (value < 20) {
  word2 = 'mai mic decat';
} else if (value > 20) {
  word2 = 'mai mare decat';
} else {
  word2 = 'egal cu';
}

var message2 = `Numarul introdus este ${value} si este ${word2} 20.`;
messageParagraph2.innerText = message2;
