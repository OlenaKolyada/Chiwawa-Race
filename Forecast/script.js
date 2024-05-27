'use strict'

const btnGetWeather = document.getElementById('get__weather');
const divTable = document.getElementById('div__table');
const cityDropdown = document.getElementById('city');
let data;
const arrHeaders = ['Day', 'Picture', 'Weather', 'T min', 'T max'];
let weatherTable;
let cityTitle;
let dateTitle;

// Button Get Weather
btnGetWeather.addEventListener('click', function() {
    const selectedCity = cityDropdown.options[cityDropdown.selectedIndex].value;
    clearTable();
    fetchWeather(selectedCity);
});

function fetchWeather (city) {

    fetch(`${city}.json`)
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        
        if(data) {
            if(!cityTitle && !dateTitle && !weatherTable) {
                
                // Creation City Title
                cityTitle = document.createElement('h1');
                cityTitle.textContent = data.city_info.name;
                divTable.appendChild(cityTitle);
                
                // Creation Date Title
                dateTitle = document.createElement('h2');
                dateTitle.textContent = data.current_condition.date;
                divTable.appendChild(dateTitle);

                // Creation Table
                weatherTable = document.createElement('table');
                let weatherTableHead = document.createElement('thead');
                let weatherTableBody = document.createElement('tbody');

                weatherTable.appendChild(weatherTableHead);
                weatherTable.appendChild(weatherTableBody);
                divTable.appendChild(weatherTable);

                // Creation Table Headers
                let headerRow = weatherTableHead.insertRow();
                arrHeaders.forEach(element => {
                    let headerCell = document.createElement('th');
                    headerCell.textContent = element;
                    headerRow.appendChild(headerCell);
                });
                
                // Creating Days Array
                let arrDays = [];
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
                        `<img src="${element.icon}" />`,
                        element.condition,
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
    .catch(error => console.error('Error loading JSON:', error));

}

function clearTable() {
    if (cityTitle || dateTitle || weatherTable) {
        weatherTable.remove();
        weatherTable = null;
       
        cityTitle.remove();
        cityTitle = null;
        
        dateTitle.remove();
        dateTitle = null;
    }
};