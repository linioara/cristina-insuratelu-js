var inputLength = document.getElementById('length');
var inputHeight = document.getElementById('height');
var inputDepth = document.getElementById('depth');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 0;
    var height = inputHeight.value || 0;
    var depth = inputDepth.value || 0;
    var result = 0;

    result = length * height * depth;

    elementResult.innerText = result;
    e.preventDefault();
  },
  false,
);
