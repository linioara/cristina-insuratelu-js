var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localvariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(contextTest);
  console.log(noVariable);
}

// console.log(
//   localVariable,
// );
/* runtime error: da undefined pt ca localVariable e setat in functie, nu in afara ei */

console.log(globalVariable);
contextTest();
