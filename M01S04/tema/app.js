let person = {
  name: 'Ionut',
  surname: 'Manole',
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
    { name: 'Larry', surname: 'Larryson', age: 30 },
    { name: 'Steven', surname: 'Stevenson', age: 31 },
    { name: 'Carol', surname: 'Carolson', age: 29 },
  ],
};

let friendsLenghts = person.friends.length;
for (let i = 0; i < friendsLenghts; i++) {
  for (let j = 0; j < friendsLenghts; j++) {
    if (i === j) {
      continue;
    }
    let outerFriend = person.friends[i];
    let innerFriend = person.friends[j];
    let ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    console.log(
      `Intre ${outerFriend.name} si ${innerFriend.name} este of diferenta de ${ageDiff}`,
      `i: ${i}`,
      `j: ${j}`,
    );
  }
}
