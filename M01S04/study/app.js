var i;

for (i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

for (i = 0; i <= 100; i++) {
  if (i % 7 !== 0) {
    continue;
  }
  console.log(i);
}
