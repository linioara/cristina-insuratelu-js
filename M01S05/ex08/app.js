let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let clickHandler = () => {
  alert('Ai apasat butonul');
};

// button.addEventListener('click', () => {
//   alert('Ai apasat butonul');
// });
button.addEventListener('click', clickHandler);

console.warn(
  `La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.`,
);
removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});
