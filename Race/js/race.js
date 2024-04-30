// Получение констант
const red = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(1)');
const blue = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(2)');
const yellow = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(3)');
const green = document.querySelector('form:nth-of-type(1) p:nth-of-type(2) input:nth-of-type(4)');
const familiale = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(1)');
const citadine = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(2)');
const berline = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(3)');
const mini = document.querySelector('form:nth-of-type(1) p:nth-of-type(4) input:nth-of-type(4)');
const carResult = document.querySelector('#result');
const nice = document.querySelector('#nice');

// Пользовательская машина
const userCar = {
  color: 'red',
  brand: 'Familiale',
  speed: undefined,
}

// Функция изменения цвета
function changeCarColor(color) {
  userCar.color = color;
}

// Присваивание цветов машине по клику
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

// Функция изменения бренда
function changeCarColor(color) {
  userCar.color = color;
}

// Присваивание бренда машине по клику
familiale.addEventListener("click", function() {
  changeCarColor("Familiale");
 });

citadine.addEventListener("click", function() {
  changeCarColor("Citadine");
});

berline.addEventListener("click", function() {
  changeCarColor("Berline");
});

mini.addEventListener("click", function() {
  changeCarColor("Mini");
});


nice.addEventListener('click', function() {
  if((userCar.color == 'blue') && (userCar.brand == 'mini')) {
    result.insertAdjacentHTML('beforeend', '<img src="img/mini-blue.png" />');
  };
});


//console.log(userCar.color);










