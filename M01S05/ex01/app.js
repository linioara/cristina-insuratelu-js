//let logMessage = `La ${hours}:${minutes}:${seconds}:${milliseconds} am ajuns la Pixel Lab.`;

function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();
  //return `La ${hours}:${minutes}:${seconds}:${milliseconds} am ajuns la Pixel Lab.`;
  console.log(
    `La ${hours}:${minutes}:${seconds}:${milliseconds} am ajuns la Pixel Lab.`,
  );
}

// console.log(
//   `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`,

//   'Am ajuns la Pixel Lab.',
// );

// console.log(getTime());

setInterval(getTime, 1000);
