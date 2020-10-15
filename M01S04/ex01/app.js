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
