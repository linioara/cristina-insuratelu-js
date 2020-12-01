class Car {
  constructor(
    left = 210,
    top = 8,
    color = 'black',
    wheelColor = 'black',
    capColor = 'white',
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.wheelColor = wheelColor;
    this.capColor = capColor;

    // this.frame = document.createElement('div');
  }

  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightFront = document.createElement('div');
  lightBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelBack = document.createElement('div');
  hubCapFront = document.createElement('div');
  hubCapBack = document.createElement('div');
  hazardInterval = 500;

  move(left = 0, top = 0) {
    // left = left || '0px'

    /* let */ left = parseInte(left);
    /* let */ top = parseInt(top);

    if (isNan(left) || isNan(top)) {
      left = 0;
      top = 0;
    }

    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;

    // this.frame.style.cssText = ...
  }

  changeColor(object, color = '#000') {
    if (
      !this.hasOwnProperty(object) /* || this[object].nodeName === undefined */
    ) {
      console.warn(`Nu am gasit obiectul ${object} pe aceasta instanta.`);

      return;
    }

    // object bracket notation
    this[object].style.backgroundColor = color;
  }

  toggleHazards() {
    if (this.intervalId === undefined) {
      this.intervalId = setInterval(() => {
        this.toggleLights();
      }, this.hazardInterval);
    } else {
      clearInterval(this.intervalId);
      this.lightFront.classList.remove('light--on');
      this.lightBack.classList.remove('light--on');
      delete this.intervalId;
    }
    // setTimeout(() => {
    //   this.toggleHazards();
    // }, this.hazardInterval);
    // o functie care se cheama pe ea insasi = functie recurenta
  }

  toggleLights() {
    this.lightFront.classList.toggle('light--on');
    this.lightBack.classList.toggle('light--on');
  }

  render() {
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px`;

    // car block (BEM)
    this.car.classList.add('car');
    this.frame.append(this.car);

    // car top
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // car body
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // car lights
    this.lightFront.classList.add('light', 'light--front');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightFront);
    this.carBody.append(this.lightBack);

    // car wheels
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.carBody.append(this.wheelFront);
    this.carBody.append(this.wheelBack);

    // car cap
    this.hubCapFront.classList.add('wheel__cap');
    this.hubCapBack.classList.add('wheel__cap');
    this.hubCapFront.style.backgroundColor = this.capColor;
    this.hubCapBack.style.backgroundColor = this.capColor;
    this.wheelFront.append(this.hubCapFront);
    this.wheelBack.append(this.hubCapBack);

    document.body.append(this.frame);
  }
}

let car = new Car();
car.render();

let redCar = new Car(300, 8, 'red');
redCar.render();

let blueCar = new Car(500, 8, 'blue');
blueCar.render();

let greenCar = new Car(700, 8, 'green', 'orange', 'cyan');
greenCar.render();

// temp2.classList.add('light--on')

blueCar.changeColor('carTop', 'yellow');
// greenCar.move(400, 10);
greenCar.toggleHazards();
