'use strict'

// Getting Constantas
const btnCreate = document.querySelector('#btn__create');
const btnRandom = document.querySelector('#btn__random');
const btnReset = document.querySelector('#btn__reset');
const btnStart = document.querySelector('#btn__start');
const raceTrack = document.querySelector('#race__track');

// Car Images Database
const carImages = {
  rover : {
    red: 'rover-red.png',
    blue: 'rover-blue.png',
    yellow: 'rover-yellow.png',
    green: 'rover-green.png'
  },
  beetle: {
    red: 'beetle-red.png',
    blue: 'beetle-blue.png',
    yellow: 'beetle-yellow.png',
    green: 'beetle-green.png'
  },
  tesla: {
    red: 'tesla-red.png',
    blue: 'tesla-blue.png',
    yellow: 'tesla-yellow.png',
    green: 'tesla-green.png'
  },
  mini: {
    red: 'mini-red.png',
    blue: 'mini-blue.png',
    yellow: 'mini-yellow.png',
    green: 'mini-green.png'
  }
};




// Creatin Car Function
function createCar() {

  const brands = Object.keys(carImages);
  const colors = Object.keys(carImages[brands[0]]);
  const speeds = [3, 6, 9, 12];

  let brandsCopy = [...brands];
  let colorsCopy = [...colors];
  let speedsCopy = [...speeds];

  let brandInputValue = document.querySelector('.main form input[name=brand]:checked').value; 
  let colorInputValue = document.querySelector('.main form input[name=color]:checked').value;
  let speedIputValue = document.querySelector('.main form input[name=speed]:checked').value;

// ??? How to make brands, colors, and speeds uniques? Doesn't work

    if(arrCars.length < 4)  {
    
    const brandIndex = brandsCopy.indexOf(brandInputValue);
    const brand = brandsCopy.splice(brandIndex, 1)[0];

    const colorIndex = colorsCopy.indexOf(colorInputValue);
    const color = colorsCopy.splice(colorIndex, 1)[0];

    const speedIndex = speedsCopy.indexOf(parseInt(speedIputValue));
    const speed = speedsCopy.splice(speedIndex, 1)[0];

    const imageSrc = carImages[brandInputValue][colorInputValue];
    const carElement = document.createElement('img');
    carElement.src = "img/" + imageSrc;
    raceTrack.appendChild(carElement);

    const newCar = {
        brand: brand,
        color: color,
        speed: speed,
        element: carElement
    };
    arrCars.push(newCar);

    
}
}

  // if(arrCars.length < 4) {
  //   const imageSrc = carImages[brandInputValue][colorInputValue];
  //   const carElement = document.createElement('img');
  //   carElement.src = "img/" + imageSrc;
  //   raceTrack.appendChild(carElement);
    
  //   const newCar = {
  //     brand : brandInputValue,
  //     color : colorInputValue,
  //     speed : speedIputValue,
  //     element : carElement,
  //   };
  
  //   arrCars.push(newCar);
  // }


// Creating Cars
let arrCars = [];
btnCreate.addEventListener('click', createCar);

// Random Creation
btnRandom.addEventListener('click', function() {
  
  const brands = Object.keys(carImages);
  const colors = Object.keys(carImages[brands[0]]);
  const speeds = [3, 6, 9, 12];

  let availableBrands = [...brands];
  let availableColors = [...colors];
  let availableSpeeds = [...speeds];

  if(arrCars.length < 4) {
  for (let i = 0; i < 4; i++) {

      const brandIndex = Math.floor(Math.random() * availableBrands.length);
      const brand = availableBrands.splice(brandIndex, 1)[0];

      const colorIndex = Math.floor(Math.random() * availableColors.length);
      const color = availableColors.splice(colorIndex, 1)[0];

      const speedIndex = Math.floor(Math.random() * availableSpeeds.length);
      const speed = availableSpeeds.splice(speedIndex, 1)[0];

      const imageSrc = carImages[brand][color];
      const carElement = document.createElement('img');
      carElement.src = "img/" + imageSrc;
      raceTrack.appendChild(carElement);

      const newCar = {
          brand: brand,
          color: color,
          speed: speed,
          element: carElement
      };
      arrCars.push(newCar);
  };
};
});


// Starting A Race
btnStart.addEventListener('click', function() {
  if(arrCars.length === 4) {
 
  let stoppedCarsCount = 0; 

  function moveCar(car) {
      let posCar = 10;
      let carSpeed = parseInt(car.speed);

      function move() {
          posCar += carSpeed;
          if (posCar < window.innerWidth - 800) {
              car.element.style.left = posCar + 'px';
              requestAnimationFrame(move);
          } else {
              
              stoppedCarsCount++;
              
              if (stoppedCarsCount === 1) {
                  stopBackground();
              };
          };
      };

      move();
  };

  arrCars.forEach(moveCar);

  let posBackground = 0;
  let backgroundAnimationId;

  function moveBackground() {
      posBackground -= 1;
      raceTrack.style.backgroundPositionX = posBackground + 'px';
      backgroundAnimationId = requestAnimationFrame(moveBackground);
  };

  moveBackground();

  function stopBackground() {
      cancelAnimationFrame(backgroundAnimationId);
  };
};
});


// Reset
btnReset.addEventListener('click', function(){
  const createdCarsList = document.querySelectorAll('#race__track img'); 
    createdCarsList.forEach(function(carElement) { 
      carElement.remove(); 
      
    });
    
    stopBackground(); // ??? Working but gives an error
    arrCars = [];
    btnCreate.addEventListener('click', createCar);
  });
  


// const firstCar = arrCars[0];
// const secondCar = arrCars[1];
// const thirdCar = arrCars[2];
// const fourthCar = arrCars[3];

// Starting A Race
// btnStart.addEventListener('click', function() { 

//   let posCar = 10;

//   function moveFirstCar(firstCar) {
//     let firstCar = document.querySelector('#race__track img:nth-child(1)');
//     posCar++;
//     firstCar.style.left = posCar + 'px';
//     setTimeout(moveFirstCar, 3, firstCar);
//   }

//   function moveSecondCar(secondCar) {
//     let secondCar = document.querySelector('#race__track img:nth-child(2)');
//     posCar++;
//     secondCar.style.left = posCar + 'px';
//     setTimeout(moveSecondCar, 6, secondCar);
//   }

//   function moveThirdCar(thirdCar) {
//     let thirdCar = document.querySelector('#race__track img:nth-child(3)');
//     posCar++;
//     thirdCar.style.left = posCar + 'px';
//     setTimeout(moveThirdCar, 9, thirdCar);
//   }

//   function moveFourthCar(FourthCar) {
//     let FourthCar = document.querySelector('#race__track img:nth-child(4)');
//     posCar++;
//     fourthCar.style.left = posCar + 'px';
//     setTimeout(moveFourthCar, 40, fourthCar);
//   }


  // if (firstCar && secondCar && thirdCar && fourthCar) {
  //   moveFisrtCar();
  //   moveSecondCar();
  //   moveThirdCar();
  //   moveFourthCar();
  // };
  
  


// });








