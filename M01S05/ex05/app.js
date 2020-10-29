let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);

let firstName = person.getName();
console.log(firstName.split(' ')[0]);

// console.log(person.getName().split(' ')[0]);

// 'Dragos'.substring(0, 3);
// // returneaza Dra
// 'Dragos'.indexOf(3);
// // returneaza g

// x.substring(0, x.indexOf('g'));
// // returneaza 'Dra'
// x.substring(0, x.indexOf(' '));
// // returneaza 'Dragos'

// // metoda slice ?

// x.split(' ');
// // returneaza 'Dragos', 'Iordache'
// x.split(' ')[0];
// // returneaza 'Dragos'

console.warn(`Afiseaza diferenta de varsta dintre  persoana si varsta ta folosind metoda getAge().
`);

console.log(Math.abs(18 - person.getAge()));

console.warn(`Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);

let year = new Date().getFullYear();
// anul curent, luat din anul setat in sistemul de operare, deci ia anul dupa anul setat in calculator; Date e ceasul calc
let age = person.getAge();

// console.log(`'(year - age).toString().substring(2)`);
console.log(`‘${(year - age).toString().slice(-2)}`);
// console.log(`‘${year - age}`.slice(-2));

// let a = 12;
// a.toString();

// `${}` - transforma in string ce e in interiorul acoladelor

console.warn(`Afiseaza propozitia: “Ma numesc xxx si am yy ani!”`);

console.log(
  `
Ma numesc ${person.getName()} si am ${person.getAge()} ani.
  `.trim(),
);
