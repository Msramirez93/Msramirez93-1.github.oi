//const cityid="5604473";
//const appid="49fb6c5af345eb2cdc6ec278f91555b2";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=49fb6c5af345eb2cdc6ec278f91555b2";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        
        
        
        
    });
    //preston api forescast
    const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=49fb6c5af345eb2cdc6ec278f91555b2";
    
    fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        let day = 0;
        forecastData.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('temp' + (day + 1)).textContent = Math.round(forecast.main.temp) + ' °F';
            document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description
            document.getElementById('day' + (day + 1)).textContent = weekdays[x.getDay()];
            day++;
        });
    });   