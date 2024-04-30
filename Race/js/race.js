// Getting Constantas
const red = document.querySelector('form div input');
const blue = document.querySelector('form div input:nth-of-type(2)');
const yellow = document.querySelector('form div input:nth-of-type(3)');
const green = document.querySelector('form div input:nth-of-type(4)');
const familiale = document.querySelector('form div:nth-of-type(2) input:nth-of-type(1)');
const citadine = document.querySelector('form div:nth-of-type(2) input:nth-of-type(2)');
const berline = document.querySelector('form div:nth-of-type(2) input:nth-of-type(3)');
const mini = document.querySelector('form div:nth-of-type(2) input:nth-of-type(4)');
const carResult = document.querySelector('#result');
const letsGo = document.querySelector('#lets__go');
const reset = document.querySelector('#reset');

// User Car
const userCar = {
  color: 'red',
  brand: 'Familiale',
  speed: undefined,
}

// Selecting Color
function selectColor(element, color) {
  element.addEventListener('click', function() {
  userCar.color = color;
  });
};

selectColor(red, 'red');
selectColor(blue, 'blue');
selectColor(yellow, 'yellow');
selectColor(green, 'green');


// Selecting Brand
function selectBrand(element, brand) {
  element.addEventListener('click', function() {
  userCar.brand = brand;
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

// Showing Final Car
letsGo.addEventListener('click', function() {
  if(!document.querySelector('#result img')) {
    const imageSrc = carImages[userCar.brand][userCar.color];
    if (imageSrc) {
      result.insertAdjacentHTML('beforeend', `<img src="img/${imageSrc}" />`);
    }
  }
});

// Reset The Form
reset.addEventListener('click', function(){
  if (document.querySelector('#result img')) {
    document.querySelector('#result img').remove();
    userCar.color = 'red';
    userCar.brand = 'Familiale';
  };
});