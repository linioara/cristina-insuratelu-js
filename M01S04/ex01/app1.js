var messageParagraph = document.getElementById('message');
var secondMessageParagraph = document.querySelector('.message2');
var thirdMessageParagraph = document.querySelector('body p:nth-of-type(3)');

var userName = prompt('Introdu numele');
var letter = prompt('Introdu litera');
// var userNameLength = userName.replaceAll(' ', '').length;
var userNameLength = userName.replace(/ /g, '').length;

var message = `Numele meu este ${userName}.`;
var message2 = `Numele introdus are ${userNameLength} caractere.`;
var phraseFragment = '';

// if (userName.includes('a') === true) {
//   phraseFragment = 'include';
// } else {
//   phraseFragment = 'nu include';
// }

//var message3 = `Numele introdus ${phraseFragment} litera a.`;

// Tema JS 01 S04 Ex01 -> punctul 6
// Folosind prompt() si String.includes() afiseaza mesajul: “Numele introdus contine|nu contine litera a.”

if (userName.includes(letter) === true) {
  phraseFragment = 'contine';
} else {
  phraseFragment = 'nu contine';
}

var message3 = `Numele introdus ${phraseFragment} litera ${letter}.`;

messageParagraph.textContent = message;
secondMessageParagraph.textContent = message2;
thirdMessageParagraph.textContent = message3;
