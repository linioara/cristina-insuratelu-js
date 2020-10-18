// Creeaza un obiect numit person

var person = {};

// Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode.
var person = {
  firstName: 'Cristina',
  lastName: 'Insuratelu',
  email: 'linioara@gmail.com',
  birthYear: '1980',
  pets: 'papagal',
  zipCode: 123456,
};

// Proprietatea pets sa contina un array de obiecte cu trei pozitii.
var person = {
  firstName: 'Cristina',
  lastName: 'Insuratelu',
  email: 'linioara@gmail.com',
  birthYear: '1980',
  pets: ['papagal', 'pisica', 'soarece'],
  zipCode: 123456,
};

// Obiectele din pets sa contina urmatoarele proprietati: name, species, age.
var person = {
  firstName: 'Cristina',
  lastName: 'Insuratelu',
  email: 'linioara@gmail.com',
  birthYear: '1980',
  pets: [
    {
      name: 'Eliza',
      species: 'perus',
      age: 1,
    },
    {
      name: 'Boris',
      species: 'Brtish shorthair',
      age: 2,
    },
    {
      name: 'Sonsonel',
      species: 'hamster',
      age: 5,
    },
  ],
  zipCode: 123456,
};

// Toata informatia poate fi inventata. Nu divulga informatii personale inutil.
// :)

// Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets.
console.log(
  `Numele meu este ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
console.log(`Am acelasi email din copilarie: ${person.email}.`);

// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} an(i).`,
);

// Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
console.log(2020 - person.pets[2].age);

// Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.

var difference = 2020 - person.birthYear - person.pets[0].age;
console.log(difference);

// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
var petName = person.pets[0].name;
console.log(petName);

// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

// In documentul HTML creeaza o lista neordonata <ul> cu 4 elemente goale <li>.
// done

// Fiecare li sa aiba un id: prop01, prop02… etc
// done

// Folosind metoda document.getElementById() afiseaza urmatoarele 4 afirmatii despre obiectul person:
// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)

var Prop01 = document.getElementById('prop01');
var contentProp01 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

//Prop01.innerText = contentProp01;
Prop01.textContent = contentProp01;

console.log(Prop01);

// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
var Prop02 = document.getElementById('prop02');
var contentProp02 = person.pets[0].age - person.pets[2].age;

//Prop02.innerText = contentProp02;
Prop02.textContent = `Diferenta de varsta este de ${contentProp02} ani.`;

console.log(Prop02);

// // Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
var Prop03 = document.getElementById('prop03');
var contentProp03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

Prop03.innerText = contentProp03;
//Prop03.textContent = contentProp03;

console.log(Prop03);

// // Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.
var Prop04 = document.getElementById('prop04');
var contentProp04 = `Animalele mele s-au nascut in ${
  2020 - person.pets[0].age
}, ${2020 - person.pets[1].age}, respectiv ${2020 - person.pets[2].age}.`;

Prop04.innerText = contentProp04;
//Prop04.textContent = contentProp04;

console.log(Prop04);

// Folosirea variabilelor este optionala dar incurajata.
