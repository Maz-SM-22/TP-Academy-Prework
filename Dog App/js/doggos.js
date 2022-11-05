const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('#breeds');
const image = document.querySelector('.dog-image');
const spinner = document.querySelector('.loading');

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        for (let breed of breedsArray) {
            const option = document.createElement('option');
            option.value = breed;
            option.innerText = breed.toLocaleUpperCase();
            select.appendChild(option);
        }
    });

const getDogImage = (url) => {
    spinner.classList.add('show');
    image.classList.remove('show');
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const imageUrl = data.message;
            image.src = imageUrl;
        })
}

select.addEventListener('change', (event) => {
    const breedUrl = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    getDogImage(breedUrl);
});

image.addEventListener('load', () => {
    spinner.classList.remove('show');
    image.classList.add('show');
})