class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.domId = `${this.make.toLowerCase()}${this.color}${Date.now()}`;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }

  displayDomSpeed() {
    let speedDial = document.getElementById(this.domId);

    if (speedDial === null) {
      speedDial = document.createElement('div');
    }
    speedDial.id = this.domId;
    speedDial.innerText = `${this.speed} km/h`;

    document.body.append(speedDial);
  }
}

var audi = new Car('Audi', 'black', 4, 50);

// audi.accelerate();
// audi.accelerate();
// audi.accelerate();
// audi.accelerate();

// Adu instanta masinii la viteza 55 apoi redu la 52, folosind chaining.
audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

// Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode.
