const box = document.querySelector('.box');
const applyButton = document.getElementById('apply-button');
const className = 'animate-class';

setTimeout(() => {
  box.classList.add(className);

  setTimeout(() => {
    box.classList.remove(className);
  }, 1000 * 2);
}, 1000 * 2);

applyButton.addEventListener(click, () => {
  // event.currentTarget
  if (box.classList.contains(className)) {
    box.classList.remove(className);
  } else {
    box.classList.add(className);
  }
});

// classList.toggle pt teme

//optional tip

box.addEventListener('transitionend', () => {
  alert('Animatia a luat sfarsit.');
});
