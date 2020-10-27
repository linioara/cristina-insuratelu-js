let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.

for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

//  In mod similar, afiseaza skillurile care NU incep cu j.

let skillsLength = person.skills.length;

for (let i = 0; i < skillsLength; i++) {
  if (person.skills[i].startsWith('j') !== true) {
    console.log(person.skills[i]);
  }
}

console.warn(
  'Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.',
);

let friendsLength = person.friends.length;
let sentence = 'Prienii mei se numesc';
for (let i = 0; i < friendsLength; i++) {
  let friend = person.friends[i];
  let friendFullName = `${friend.name} ${friend.surname}`;
  let punctuation = i === friendsLength - 1 ? '.' : ',';

  sentence = `${sentence} ${friendFullName}${punctuation}`;
}

console.log(sentence);

// let prop = 'propozitia mea';
// prop = prop + ' este complicata';
// // sau
// prop += ' este complicata';

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

let totalAge = 0;

for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (friend.age >= 30) {
    totalAge += friend.age;
    // totalAge = totalAge + friend.age;
  }
}
console.log(totalAge);

console.warn(
  ` Folosind un for, afiseaza suma anilor de nastere a persoanelor.`,
);

let currentYear = 2020;
let sumBirthYears = currentYear - person.age;

for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  sumBirthYears += currentYear - friend.age;
}

console.log(sumBirthYears);

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.`,
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (Math.abs(person.age - friend.age) > 2) {
    console.log(Math.abs(person.age - friend.age));
  }
}

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.`,
);

for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];

  if (friend.age % 2 !== 0) {
    console.log(
      `Intre ${person.name} si ${friend.name} este o diferenta de ${Math.abs(
        person.age - friend.age,
      )} ani.`,
    );
  }
}

console.warn(` Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
`);

for (let i = skillsLength - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  `9. Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana`,
);

for (let i = 0; i < skillsLength; i++) {
  console.log(person.skills[i]);
}

console.warn(`10. In mod similar, afiseaza skillurile care incep cu c `);

for (let i = 0; i < skillsLength; i++) {
  if (person.skills[i].startsWith('c') === true) {
    console.log(person.skills[i]);
  }
}

console.warn(
  `11. Folosind un for afiseaza propozitia:
  "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."`,
);

let sentence1 = 'Numele de familie ale prietenilor mei sunt:';
for (let i = 0; i < friendsLength; i++) {
  let friendSurname = person.friends[i].surname;
  let punctuation = i === friendsLength - 1 ? '.' : ',';

  sentence1 = `${sentence1} ${friendSurname}${punctuation}`;
}

console.log(sentence1);

console.warn(
  `12.  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);

let totalFriendsAge = 0;

for (let i = 0; i < friendsLength; i++) {
  let friend = person.friends[i];

  totalFriendsAge = totalFriendsAge + friend.age;
  // totalFriendsAge += friend.age;
}
console.log(totalFriendsAge);

console.warn(`13.  Folosind un for, afiseaza suma anilor persoanelor.`);

let sumFriendsAge = 0;
let sumPersonsAge = 0;

for (let i = 0; i < friendsLength; i++) {
  let friend = person.friends[i];
  sumFriendsAge += friend.age;
  sumPersonsAge = person.age + sumFriendsAge;
}
console.log(sumPersonsAge);

console.warn(
  `14. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);

for (let i = 0; i < friendsLength; i++) {
  let ageDiff = Math.abs(person.age - person.friends[i].age);
  let sentenceDiff = `Diferenta de varsta intre ${person.name} si ${person.friends[i].name} este de ${ageDiff} ani.`;

  console.log(sentenceDiff);
}

console.warn(`15. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends. (un singur console.log()!)
`);

for (let i = 0; i < friendsLength; i++) {
  ageDiff = Math.abs(person.age - person.friends[i].age);

  sentenceDiff = `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${ageDiff} ani.`;

  console.log(sentenceDiff);
}

console.warn(
  `Afiseaza fraza prietenii mei sunt xxx yyy, xxx yyy, xxx yyy in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).`,
);

for (let i = friendsLength - 1; (i = 0); i--) {
  // let friend = person.friends[i];
  // let friendFullName = `${friend.name} ${friend.surname}`;
  // let punctuation = i === friendsLength - 1 ? '.' : ',';

  // sentence3 = `Prietenii mei sunt ${friendFullName}${punctuation}`;

  let friend = person.friends[i];
  console.log(`${friend.name} ${friend.surname}`);
}
