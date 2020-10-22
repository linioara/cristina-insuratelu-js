let friends = [
  {
    name: 'Dragos',
    surname: 'Dragosson',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
  {
    name: 'Ragnar',
    surname: 'Ragnarson',
  },
];

console.warn(`
Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.
`);

let friendsLength = friends.length;
for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  console.log(friend.surname);
}

console.warn(`
Afiseaza numele complet al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.
`);

for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  console.log(`${friend.name} ${friend.surname}`);

  if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
    break;
  }
}

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].name === 'Steven') {
//     console.log(friends[i].name, friends[i].surname + `   found steven -> 👨🏻`);
//     break;
//   }

//   console.log(friends[i].name, friends[i].surname);
// }

console.warn(`Folosind keywordul continue, afiseaza numele complet al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13.
`);

for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  // if (friend.name.length < 13) {
  //   continue;
  // }

  if (`${friend.name} ${friend.surname}`.length <= 13) {
    continue;
  }
  console.log(`${friend.name} ${friend.surname}`);
}
