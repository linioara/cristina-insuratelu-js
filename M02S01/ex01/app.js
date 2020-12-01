class Car {
  topReverseSpeed = -50;

  isTrunkOpen = false;

  areLightsOn = false;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.topSpeed = 160;
    // this.topReverseSpeed = -50;

    // this.isTrunkOpen = false;
    // this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
    // this.speed = this.speed + 1;
    // this.speed += 1;
  }

  decelerate() {
    this.speed--;
    // this.speed = this.speed - 1;
    // this.speed -= 1;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
    console.log(this.isTrunkOpen);
  }

  closeTrunk() {
    this.isTrunkOpen = false;
    console.log(this.isTrunkOpen);
  }

  turnLightsOn() {
    this.areLightsOn = true;
    console.log(this.areLightsOn);
  }

  turnLightsOff() {
    this.areLightsOn = false;
    console.log(this.areLightsOn);
  }

  flashLights() {
    this.turnLightsOn();

    setTimeout(this.turnLightsOff, 3000);
  }
}

// new Date()

let audi = new Car('Audi', 'black', 4, 50);

console.warn(
  `Instantiaza o alta masina (Opel, red, 4 rosi, viteza 3). o poti salva intr-o variabila numita opel`,
);

let opel = new Car('Opel', 'red', 4, 30);

console.warn(
  `Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.`,
);

console.warn(`
Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
Adauga o proprietate numita topReverseSpeed si asgineaza-i valoarea -50.
Adauga o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
`);

// Tema (6-10):
console.warn(`6. Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.

7. Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.

8. Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.

9. Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.

10. Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().


11. Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])

12. Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
a. “Masina era marca make si se deplasa cu speed km/h”
b. In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h ->  setSpeed(car.speed - 5)”
`);

const cars = [audi, opel];

cars.forEach((car) => {
  console.log(
    `Masina este marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`,
  );

  car.setSpeed(car.speed - 5);
  console.log(`Viteza noua este ${car.speed} km/h.`);
});
