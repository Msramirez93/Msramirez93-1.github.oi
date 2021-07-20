const URL_events = "https://Msramirez93-1.github.io/lesson12/home.html/pagecity.json";

fetch(URL_events)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Recoleta') {
                let events = towns[i].events;
                for (let i = 0; i < events.length; i++) {
                    let event = document.createElement('p');
                    event.innerHTML = events[i];
                    document.querySelector('.events').appendChild(event);
                    // text.setAttribute('class', 'events_p');
                }
            }
        }
    });
    //lazy load img//
    const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    
    };
};
const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);

            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} else {
  imagesToLoad.forEach((img) => {
      loadImages(img);
  });
}
WebFont.load({google: {families: ['Acme']}});