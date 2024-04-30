// Getting Constantas
var red = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(1)');
var blue = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(2)');
var yellow = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(3)');
var green = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(4)');
var familiale = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(1)');
var citadine = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(2)');
var berline = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(3)');
var mini = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(4)');
var carResult = document.querySelector('#result');
var nice = document.querySelector('#nice');

// User Car
var userCar = {
  color: 'red',
  brand: 'Familiale',
  speed: undefined,
}

// Changing Color Function
function changeCarColor(color) {
  userCar.color = color;
}

// Affecting Colors By Click
red.addEventListener("click", function() {
  changeCarColor("red");
 });

blue.addEventListener("click", function() {
  changeCarColor("blue");
});

yellow.addEventListener("click", function() {
  changeCarColor("yellow");
});

green.addEventListener("click", function() {
  changeCarColor("green");
});

// Changing Brand Function
function changeCarBrand(brand) {
  userCar.brand = brand;
}

// Affecting Brand By Click
familiale.addEventListener("click", function() {
  changeCarBrand("Familiale");
 });

citadine.addEventListener("click", function() {
  changeCarBrand("Citadine");
});

berline.addEventListener("click", function() {
  changeCarBrand("Berline");
});

mini.addEventListener("click", function() {
  changeCarBrand("Mini");
});

// Getting A Final User Car Image
nice.addEventListener('click', function() {
  if((userCar.color == 'blue') && (userCar.brand == 'mini')) {
    result.insertAdjacentHTML('beforeend', '<img src="img/mini-blue.png" />');
  };
});


//console.log(userCar.color);










