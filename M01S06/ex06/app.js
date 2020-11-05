let paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if (!logContainer || logContainer === null) {
    logContainer = document.createElement('div');

    document.body.appendChild(logContainer);
  }
  messageParagraph.innerText = message;

  logContainer.appendChild(messageParagraph);
};

// console.log = paragraphLog;

// let pixelApp = {
//   pixelApp.domLog = paragraphLog;
// }

console.domLog = paragraphLog;
