'use strict'

const btnWeather = document.getElementById('weather');
const btnGraphics = document.getElementById('graphics');
const btnClear = document.getElementById('clear');
const divWeather = document.getElementById('div__weather');
const header = document.getElementById('header');
const divGraphics = document.getElementById('div__graphics');
const inputField = document.getElementById('city');
const arrHeaders = ['Day', 'Weather', 'T min', 'T max'];
let data = null;
let weatherTable,
    cityTitle,
    errorTitle,
    graphicTable;
let arrDays = [];

// Default State
btnWeather.disabled = true;
btnGraphics.disabled = true;
btnClear.disabled = true;

let inputCity = document.getElementById('city').value;

inputField.addEventListener('input', function() {
    if (inputField.value) {
        btnWeather.disabled = false;
    } 
});

// Button Weather
btnWeather.addEventListener('click', function() {
    inputCity = document.getElementById('city').value;
    clearTable();
    fetchWeather(inputCity, inputField);
    btnGraphics.disabled = false;
    btnClear.disabled = false;
    
});

// Key Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        btnWeather.click();
    }
});

// Button Graphics
btnGraphics.addEventListener('click', function() {
        buildGraphic();

})

function fetchWeather (city, inputElement) {

    fetch(`https://www.prevision-meteo.ch/services/json/${city}`)
    // fetch('paris.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(fetchedData => {
        data = fetchedData;
        
        if(data) {
            if(!cityTitle && !weatherTable) {
                inputElement.value = '';
                // Creation City Title
                cityTitle = document.createElement('h3');
                cityTitle.textContent = data.city_info.name + ', ' + data.current_condition.date;
                header.appendChild(cityTitle);
                

                // Creation Table
                weatherTable = document.createElement('table');
                weatherTable.classList.add('weather');
                let weatherTableHead = document.createElement('thead');
                let weatherTableBody = document.createElement('tbody');

                weatherTable.appendChild(weatherTableHead);
                weatherTable.appendChild(weatherTableBody);
                divWeather.appendChild(weatherTable);

                // Creation Table Headers
                let headerRow = weatherTableHead.insertRow();
                arrHeaders.forEach(element => {
                let headerCell = document.createElement('th');
                headerCell.textContent = element;
                headerRow.appendChild(headerCell);
                });
                
                // Creating Days Array
                
                Object.values(data).forEach(element => {
                    if (element.hasOwnProperty("day_short")) {
                    arrDays.push(element);
                    }
                });

                // Creating Table With Data
                arrDays.forEach(element => {
                    let row = weatherTableBody.insertRow();
                    
                    const cellValues = [
                        element.day_long,
                        element.condition + `<img src="${element.icon}" />`,
                        element.tmin + '℃',
                        element.tmax + '℃'
                    ];
                    
                    cellValues.forEach((value, index) => {
                        let cell = row.insertCell(index);
                        cell.innerHTML = value;
                    });
                });
            };
        };

        
    
    })
    .catch(error => {
        console.error('Error loading JSON:', error.message);
        errorTitle = document.createElement('h3');
        errorTitle.classList.add('alert');
        errorTitle.textContent = 'Not found';
        header.appendChild(errorTitle);
        inputElement.value = '';
        btnGraphics.disabled = true;
    });
}

// Button Clear
btnClear.addEventListener('click', function() {
    clearTable();
})

function clearTable() {
    btnWeather.disabled = true;
    btnGraphics.disabled = true;

    if (graphicTable) {
        graphicTable.remove();
        graphicTable = null;
    }

    if (cityTitle || weatherTable || errorTitle) {
        if (cityTitle) {
            cityTitle.remove();
            cityTitle = null;
        }
        if (weatherTable) {
            weatherTable.remove();
            weatherTable = null;
        }
        if (errorTitle) {
            errorTitle.remove();
            errorTitle = null;
        }
    }

    arrDays = [];
    btnClear.disabled = true;

};


function buildGraphic() {
    if(!graphicTable) {


    // Creation Graphic Table
    graphicTable = document.createElement('table');
    graphicTable.classList.add('graphics');
    let graphicTableHead = document.createElement('thead');
    let graphicTableBody = document.createElement('tbody');

    graphicTable.appendChild(graphicTableHead);
    graphicTable.appendChild(graphicTableBody);
    divGraphics.appendChild(graphicTable);
    

let k = 30;

for (let i = 0; i < 4; i++) {
    const graphicRow = graphicTable.insertRow();
    
    for (let j = 0; j < 6; j++) {
        const cell = graphicRow.insertCell();
        if (j === 0) {
           cell.textContent = k + '℃';
            k -= 10;
        } else if (i === 3 && j > 0) {
            const index = j - 1;
            if (index < arrDays.length) {
                const day = arrDays[index];

                const textMin = document.createElement('div');
                textMin.classList.add('text__min');
                textMin.textContent = day.tmin + '℃';
                cell.appendChild(textMin);

                const rectangleMin = document.createElement('div');
                rectangleMin.classList.add('rectangle__min');
                rectangleMin.style.height = day.tmin * 7.9 + 'px';
                cell.appendChild(rectangleMin);
                

                
                const rectangleMax = document.createElement('div');
                rectangleMax.classList.add('rectangle__max');
                rectangleMax.style.height = day.tmax * 7.9 + 'px';
                cell.appendChild(rectangleMax);
            }
        }
    }
}



    const lastRow = graphicTable.insertRow();
    
    
    for (let i = 0; i < 6; i++) {
        const lastRowCell = lastRow.insertCell();
        if (i === 0) {
            continue;
        }
        if (i === 5) {
            lastRowCell.innerHTML = arrDays[arrDays.length - 1].day_short;
            break;
        }
        lastRowCell.innerHTML = arrDays[i - 1].day_short;
    }

    btnGraphics.disabled = true;
    }
}