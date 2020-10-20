var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'Ma aflu in context local';
  var globalVariable = 'Nu ma aflu in contextul global';

  // console.log(globalVariable);
  // console.log(localVariable);
}

// console.log(localVariable);
console.log(
  alVariable,
); /* ar trebui ssa scrie 'Ma aflu in contextul global' dar scrie de fapt 'Nu ma aflu in contextul global' pt ca var permite suprascrierea*/
