let inputLength = document.getElementById('length');
let inputWidth = document.getElementById('width');
let inputHeight = document.getElementById('height');
let inputRadius = document.getElementById('radius');
let form = document.querySelector('form');
let result = document.getElementById('result');

form.addEventListener(
  'submit',
  (event) => {
    let length = inputLength.value || 0;
    let width = inputWidth.value || 0;
    let height = inputHeight.value || 0;
    let radius = inputRadius.value || 0;

    let resultParalelipiped = length * width * height;
    let resultCirleArea = Math.PI * Math.pow(radius, 2);
    let volumeSphere = (4 / 3) * Math.PI * Math.pow(radius, 3);
    let surfaceSphere = 4 * Math.PI * Math.pow(radius, 2);

    if (length != '' && height != '' && width != '') {
      result.innerText = `Volumul paralelipipedului este ${resultParalelipiped}`;
    } else {
      result.innerText = `Aria cercului este ${resultCirleArea}, volumul sferei este ${volumeSphere} si suprafata sferei este ${surfaceSphere}.`;
    }

    event.preventDefault();
  },
  false,
);
