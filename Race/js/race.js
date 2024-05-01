'use strict'

// Getting Constantas
const red = document.querySelector('form div input');
const blue = document.querySelector('form div input:nth-of-type(2)');
const yellow = document.querySelector('form div input:nth-of-type(3)');
const green = document.querySelector('form div input:nth-of-type(4)');
const familiale = document.querySelector('form div:nth-of-type(2) input:nth-of-type(1)');
const citadine = document.querySelector('form div:nth-of-type(2) input:nth-of-type(2)');
const berline = document.querySelector('form div:nth-of-type(2) input:nth-of-type(3)');
const mini = document.querySelector('form div:nth-of-type(2) input:nth-of-type(4)');
const btnCreate = document.querySelector('#btn__create');
const btnReset = document.querySelector('#btn__reset');
const divResult = document.querySelector('#result');
// let canvasRace = document.querySelector('canvas');
// let contextRace = canvasRace.getContext('2d');

// let bg = new Image();
// bg.src = 'bg.png';

// function draw() {
//   contextRace.drawImage(bg, 0, 0);
// }

// First Car
const firstCar = {
  color: 'red',
  brand: 'Familiale',
  speed: undefined,
}

// Second Car
const secondCar = Object.create(firstCar);

// Third Car
const thirdCar = Object.create(firstCar);

// Fourth Car
const fourthCar = Object.create(firstCar);



// Selecting Color
function selectColor(element, color) {
  element.addEventListener('click', function() {
  firstCar.color = color;
  });
};

selectColor(red, 'red');
selectColor(blue, 'blue');
selectColor(yellow, 'yellow');
selectColor(green, 'green');


// Selecting Brand
function selectBrand(element, brand) {
  element.addEventListener('click', function() {
  firstCar.brand = brand;
  });
};

selectBrand(familiale, 'Familiale');
selectBrand(citadine, 'Citadine');
selectBrand(berline, 'Berline');
selectBrand(mini, 'Mini');

// Car Images
const carImages = {
  Familiale: {
    red: 'familiale-red.png',
    blue: 'familiale-blue.png',
    yellow: 'familiale-yellow.png',
    green: 'familiale-green.png'
  },
  Citadine: {
    red: 'citadine-red.png',
    blue: 'citadine-blue.png',
    yellow: 'citadine-yellow.png',
    green: 'citadine-green.png'
  },
  Berline: {
    red: 'berline-red.png',
    blue: 'berline-blue.png',
    yellow: 'berline-yellow.png',
    green: 'berline-green.png'
  },
  Mini: {
    red: 'mini-red.png',
    blue: 'mini-blue.png',
    yellow: 'mini-yellow.png',
    green: 'mini-green.png'
  }
};

// Creating Cars
btnCreate.addEventListener('click', function() {
  if(!document.querySelector('#result img:nth-of-type(1)')) {
    const imageSrc = carImages[firstCar.brand][firstCar.color];
    if (imageSrc) {
      divResult.insertAdjacentHTML('beforeend', `<img src="img/${imageSrc}" /><br />`);
    }
  } else if((!document.querySelector('#result img:nth-of-type(2)'))) {
    const imageSrc = carImages[secondCar.brand][secondCar.color];
    if (imageSrc) {
      divResult.insertAdjacentHTML('beforeend', `<img src="img/${imageSrc}" /><br />`);
    }
  } else if ((!document.querySelector('#result img:nth-of-type(3)'))) {
    const imageSrc = carImages[thirdCar.brand][thirdCar.color];
    if (imageSrc) {
      divResult.insertAdjacentHTML('beforeend', `<img src="img/${imageSrc}" /><br />`);
    }
  } else if ((!document.querySelector('#result img:nth-of-type(4)'))) {
    const imageSrc = carImages[fourthCar.brand][fourthCar.color];
    if (imageSrc) {
      divResult.insertAdjacentHTML('beforeend', `<img src="img/${imageSrc}" /><br />`);
    }
  }
});

// Reset The Form
btnReset.addEventListener('click', function(){
  if (document.querySelector('#result img')) {
    for (let i = 4; i > 0; i--) {
      document.querySelector(`#result img:nth-of-type(${i})`).remove();
      document.querySelector(`#result br:nth-of-type(${i})`).remove();
    }
    firstCar.color = 'red';
    firstCar.brand = 'Familiale';
  };
});

// btnReset.addEventListener('click', function(){
//     if(document.querySelector('#result img')) {
//       document.querySelector('#result').remove();
//       firstCar.color = 'red';
//       firstCar.brand = 'Familiale';
//       document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="main" id="result"></div>');
//     };  
// });

//divResult.outerHTML = '<div class="main" id="result"></div>';

// document.querySelector('#result img:nth-of-type(4)').remove();
// document.querySelector('#result br:nth-of-type(4)').remove();

// document.querySelector('#result img:nth-of-type(3)').remove();
// document.querySelector('#result br:nth-of-type(3)').remove();

// document.querySelector('#result img:nth-of-type(2)').remove();
// document.querySelector('#result br:nth-of-type(2)').remove();

// document.querySelector('#result img:nth-of-type(1)').remove();
// document.querySelector('#result br:nth-of-type(1)').remove();