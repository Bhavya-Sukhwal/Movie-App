const API_KEY ='api_key=287192cb5f5a2c8035ff273f8797bf14';
const BASE_URL ='https://api.themoviedb.org/3';
const TOP_URL = BASE_URL + '/trending/movie/day?' + API_KEY + "&language=en-US&page=1";
const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/`;

const topdiv = document.getElementById("topdiv");

fetch(TOP_URL)
  .then(response => response.json())
  .then(data => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    for (let i = 0; i < 3; i++) {
      const movie = data.results[i];
      const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (i === 0) {
        carouselItem.classList.add('active');
      }

      const carouselIndicator = document.createElement('li');
      carouselIndicator.setAttribute('data-target', '#movieCarousel');
      carouselIndicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) {
        carouselIndicator.classList.add('active');
      }

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('d-block', 'w-100');
      moviePoster.src = posterUrl;
      moviePoster.alt = movie.title;

      carouselItem.appendChild(moviePoster);
      carouselInner.appendChild(carouselItem);
      carouselIndicators.appendChild(carouselIndicator);
    }
  })
  .catch(error => console.error('Error fetching data:', error));