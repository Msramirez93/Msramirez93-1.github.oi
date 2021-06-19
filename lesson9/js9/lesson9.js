const requestURL="https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
     
        const towns = jsonObject['towns'];
        for (let i = 0; i , i < towns.length; i++ ) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let text = document.createElement('div');
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let image = document.createElement('img');
                let motto = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');

                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
                image.setAttribute('src', 'images9/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                text.setAttribute('class', 'text');

                text.appendChild(name);
                text.appendChild(motto);
                text.appendChild(yearFounded);
                text.appendChild(currentPopulation);
                text.appendChild(averageRainfall);
                card.appendChild(text);
                card.appendChild(image);
                document.querySelector('.cards').appendChild(card);
            }
        }
    });