// clasele sunt notate cu litera mare, versus variabile care sunt cu litera mica
let Car = {
  make: '',
  color: '',
  wheels: '',
  speed: 0,
  topSpeed: 100,
  topReverseSpeed: -50,
  displaySpeed: function () {
    console.log(
      `Vehiculul ${this.make} se deplasa cu vitea de ${this.speed} km/h.`,
    );
  },

  accelerate: function () {
    // this.speed++;
    // this.displaySpeed();
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    // this.speed--;
    // this.displaySpeed();
    this.setSpeed(this.speed - 1);
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }

    this.displaySpeed();
  },
  flashLights: function () {
    this.turnLightsOn();
    setTimeout(this.turnLightsOff, 1000 * 3);
    // 10 * 24 * 60 * 60 * 1000 (10 zile in milisecunde)
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;

//console.log(audi);

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
// Ruleaza metoda accelerate().

audi.setSpeed(140);
audi.accelerate();
