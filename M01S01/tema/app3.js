var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var radius = inputRadius.value || 0;
    var result = 0;

    result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    /* result = (4 / 3) * Math.PI * radius * radius  * radius; */

    elementResult.innerText = result;
    e.preventDefault();
  },
  false,
);
