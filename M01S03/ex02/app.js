var person = {
  name: 'Ana',
  surname: 'Cristina',
  age: 32,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    dragos: {
      name: 'Dragos',
      surname: 'Iordache',
      age: 35,
    },
    alexandra: {
      name: 'Alexandra',
      surname: 'Pal',
      age: 33,
    },
    matei: {
      name: 'Matei',
      surname: 'Insuratelu',
      age: '10',
    },
  },
};

console.log(person.friends.matei);
console.log(person.skills.javaScript);

// Afiseaza varsta prietenului Matei //
console.log(person.friends.matei.age);

// Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry //
console.log(2020 - person.friends.dragos.age);

// Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name //
console.log(
  person.friends.dragos.name +
    ' este cu ' +
    (person.friends.dragos.age - person.friends.alexandra.age) +
    ' ani mai mare decat ' +
    person.friends.alexandra.name +
    '.',
);

// Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani” folosind doar proprietatile  //
console.log(
  'Prietenul meu ' +
    person.friends.matei.name +
    ' ' +
    person.friends.matei.surname +
    ' are ' +
    person.friends.matei.age +
    ' ani.',
);

// Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry. //

// interpolare //
console.log(
  `Prietenii mei sunt: ${person.friends.dragos.name}, ${person.friends.alexandra.name} si ${person.friends.matei.name}.`,
);

//Afiseaza numarul de caractere al numelui de familie al lui Steven //
console.log(person.friends.dragos.surname.length);

// TEMA (JS M01 S03 Ex02 -> 8 - 14)

// Afiseaza varsta prietenei Carol
console.log('Alexandra are ' + person.friends.alexandra.age + ' ani.');

// Folosind anul curent calculeaza si afiseaza anul de nastere al lui Steven, apoi al lui Carol.
console.log(
  'Anul nasterii lui Dragos: ' + (2020 - person.friends.dragos.age) + ' ani.',
);
console.log(
  'Anul nasterii Alexandrei: ' +
    (2020 - person.friends.alexandra.age) +
    ' ani.',
);

// Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Carol.”
// folosind proprietatile name.
console.log(
  `${person.friends.dragos.name} este cu ${
    person.friends.dragos.age - person.friends.alexandra.age
  } ani mai mare decat ${person.friends.alexandra.name}.`,
);

// Afiseaza propozitia: “Prietena mea Carol Carolson are xx ani.” folosind doar proprietatile.
console.log(
  `Prietena mea, ${person.friends.alexandra.name} ${person.friends.alexandra.surname}, are ${person.friends.alexandra.age} ani.`,
);

// Afiseaza propozitia: “Prietenii mei sunt: Larry, Carol si Steven.”.
console.log(
  `Prietenii mei sunt: ${person.friends.dragos.name}, ${person.friends.alexandra.name} si ${person.friends.matei.name}. Yey!`,
);

// Afiseaza numarul de caractere al numelui de familie al lui Larry
console.log(`Numarul de caractere: ${person.friends.matei.surname.length}`);

// Calculeaza diferenta dintre numarul de caractere al numelor lui Steven si Carol.
console.log(
  `${
    person.friends.dragos.surname.length -
    person.friends.alexandra.surname.length
  }`,
);
