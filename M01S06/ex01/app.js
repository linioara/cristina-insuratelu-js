// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().

let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    //console.log(this);
    this.speed++;
  },
  decelerate: function () {
    //console.log(this);
    this.speed--;
  },
  // this de la decelerate citeste in contextul global

  // decelerate: function () {
  //   console.log(car);
  //   car.speed--;
  // },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    console.log(this.areLightsOn);

    setTimeout(() => {
      this.turnLightsOff();
      console.log(this.areLightsOn);
    }, 3000);
  },
};

// test = () => {
//   console.log(this);
// };

// test2 = function () {
//   console.log(this);
// };

// let article {
//   claps: 0,
//   clap: function() {
//     this.claps++;
//   }
// }
