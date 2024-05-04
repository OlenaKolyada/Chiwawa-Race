'use strict'

// Getting Constantas
const btnCreate = document.querySelector('#btn__create');
const btnRandom = document.querySelector('#btn__random');
const btnReset = document.querySelector('#btn__reset');
const btnStart = document.querySelector('#btn__start');
const raceTrack = document.querySelector('#race__track');
const userMessage = document.querySelector('#user__message');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const finish = window.innerWidth - 800;


// Default State
btnReset.disabled = true;
btnStart.disabled = true;

let arrCars = [];
let arrWinners = [];


// Car Images Database
const carImages = {
  rover : {
    Tomato: 'rover-red.png',
    Blueberry: 'rover-blue.png',
    Banana: 'rover-yellow.png',
    Avocado: 'rover-green.png'
  },
  beetle: {
    Tomato: 'beetle-red.png',
    Blueberry: 'beetle-blue.png',
    Banana: 'beetle-yellow.png',
    Avocado: 'beetle-green.png'
  },
  tesla: {
    Tomato: 'tesla-red.png',
    Blueberry: 'tesla-blue.png',
    Banana: 'tesla-yellow.png',
    Avocado: 'tesla-green.png'
  },
  mini: {
    Tomato: 'mini-red.png',
    Blueberry: 'mini-blue.png',
    Banana: 'mini-yellow.png',
    Avocado: 'mini-green.png'
  }
};


// Create Button
btnCreate.addEventListener('click', function() {

  let brandInputValue = document.querySelector('.main form input[name=brand]:checked').value; 
  let colorInputValue = document.querySelector('.main form input[name=color]:checked').value;
  let speedIputValue = document.querySelector('.main form input[name=speed]:checked').value;

    if(arrCars.length < 4)  {
      btnRandom.disabled = true;
      btnReset.disabled = false;
      const imageSrc = carImages[brandInputValue][colorInputValue];
      const carImage = document.createElement('img');
      carImage.src = "img/" + imageSrc;
      raceTrack.appendChild(carImage);
    
    const newCar = {
        brand: brandInputValue,
        color: colorInputValue,
        speed: speedIputValue,
        image: carImage,
        position: 10,
      };
    arrCars.push(newCar);

    if(arrCars.length === 4) {
      btnStart.disabled = false;
      btnCreate.disabled = true;
      userMessage.textContent = 'Ready to Go!';
    } else {
      btnStart.disabled = true;
    };

    
    const nextColorInput = document.querySelector('.main form input[name=color]:checked + input[name=color]');
    const nextSpeedInput = document.querySelector('.main form input[name=speed]:checked + input[name=speed]');
    const currentBrandInput = document.querySelector('.main form input[name=brand]:checked');
    const nextBrandInput = document.querySelector('.main form input[name=brand]:checked + input[name=brand]');
    const currentColorInput = document.querySelector('.main form input[name=color]:checked');
    const currentSpeedInput = document.querySelector('.main form input[name=speed]:checked');
    const firstBrandInput = document.querySelector('.main form input[name=brand]:first-of-type');
    const firstColorInput = document.querySelector('.main form input[name=color]:first-of-type');
    const firstSpeedInput = document.querySelector('.main form input[name=speed]:first-of-type');
    

    if (nextBrandInput && nextColorInput && nextSpeedInput) {
      nextBrandInput.checked = true;
      currentBrandInput.disabled = true;
      nextColorInput.checked = true;
      currentColorInput.disabled = true;
      nextSpeedInput.checked = true;
      currentSpeedInput.disabled = true;
    } else {
      firstBrandInput.checked = true;
      currentBrandInput.disabled = true;
      firstColorInput.checked = true;
      currentColorInput.disabled = true;
      firstSpeedInput.checked = true;
      currentSpeedInput.disabled = true;
    };
};
});
 

// Random Button
btnRandom.addEventListener('click', function() {
  
  btnCreate.disabled = true;
  btnRandom.disabled = true;
  btnReset.disabled = false;
  btnStart.disabled = false;

  radioButtons.forEach(function(unableButtons) {
    unableButtons.disabled = true;
    
  })
  userMessage.textContent = 'Ready to Go!';
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
      const carImage = document.createElement('img');
      carImage.src = "img/" + imageSrc;
      raceTrack.appendChild(carImage);

      const newCar = {
          brand: brand,
          color: color,
          speed: speed,
          image: carImage,
          position: 10,
      };
      arrCars.push(newCar);
  };
};
});


// Reset Button
btnReset.addEventListener('click', function(){

  btnCreate.disabled = false;
  btnRandom.disabled = false;
  btnReset.disabled = true;
  btnStart.disabled = true;
  

  userMessage.textContent = 'One more time?';
  const createdCarsList = document.querySelectorAll('#race__track img'); 
    createdCarsList.forEach(function(carImage) { 
      carImage.remove(); 
    });
    
    stopBG(); 
    arrCars = [];
   
    radioButtons.forEach(function(unableButtons) {
      unableButtons.disabled = false;
      
  })
});


// Start Button
btnStart.addEventListener('click', function() {

  btnCreate.disabled = true;
  btnRandom.disabled = true;
  btnReset.disabled = true;
  btnStart.disabled = true;
  
  
  userMessage.textContent = 'Who is The Winner?';
  if(arrCars.length === 4) {
    
    
    function moveCar(car) {
      let posCar = car.position;
      let carSpeed = parseInt(car.speed);

      function move() {
        posCar += carSpeed;
        car.position = posCar;

          if (posCar >= finish) {
            car.position = finish;
            
            const newWinner = {
              brand: car.brand,
              color: car.color,
              speed: car.speed,
              image: car.carImage,
              position: finish,
            }
            arrWinners.push(newWinner);
              stopBG();
                
              } else {
            car.image.style.left = posCar + 'px';
            if(posCar < finish) {
            requestAnimationFrame(move);
            }
            }
            if(arrWinners.length === 4) {
              userMessage.innerHTML = 'Winner: ' + arrWinners[0].color + '<br>Second place: ' + arrWinners[1].color + '<br>Third place: ' + arrWinners[2].color;
              btnReset.disabled = false;

              arrWinners.forEach((winner, index) => {
                const winnerNumberImage = document.createElement('img');
                winnerNumberImage.src = `img/${index + 1}.png`; 
                winnerNumberImage.className = 'winner-number';
                winner.image.appendChild(winnerNumberImage); 
              });
              

            }

            
            };
  
move();
};

arrCars.forEach(moveCar);
moveBG();


};
});


// Background Movement Functions
let posBG = 0;
let bgAnimation;

function moveBG() {
  posBG -= 1;
  raceTrack.style.backgroundPositionX = posBG + 'px';
  bgAnimation = requestAnimationFrame(moveBG);
};

function stopBG() {
  cancelAnimationFrame(bgAnimation);
};
