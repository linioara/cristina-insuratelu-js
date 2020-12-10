const box = document.querySelector('.box');
const controls = document.querySelector('.controls');
const form = document.forms[0]; // deprecated
const dinamicButton = document.getElementById('dinamic-button');
const clearButton = document.getElementById('clear');

// DOM Event Delegation
controls.addEventListener('click', (event) => {
  let target = event.target;
  let className = 'set-color';

  if (
    event.target.nodeName === 'BUTTON' &&
    target.classList.contains(className)
  ) {
    const color = event.target.style.backgroundColor;

    box.style.backgroundColor = color;
  }
});

//jQuery
// $('.controls').on('click', 'button.set-color', function () {})

form.addEventListener('submit', (event) => {
  const input = form.querySelector('input');

  dinamicButton.style.backgroundColor = input.value;

  event.preventDefault();
});

clearButton.addEventListener('click', () => {
  box.removeAttribute('style');
});
