const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by_popularity.desc&api_key=1c87c26d2dc4703eb810fe12c4b6f09f&page=1';
const IMG_PATH = 'https://iamge.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=1c87c26d2dc4703eb810fe12c4b6f09f&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
