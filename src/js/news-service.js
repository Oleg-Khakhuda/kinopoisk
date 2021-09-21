const API_KEY = 'd7524955-a7cb-41d4-816a-be5470adb9f0'
const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films'
const options = {
  headers: {
    'X-API-KEY': API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
    const url = `${BASE_URL}/search-by-keyword?keyword=${this.searchQuery}&page=1`;
    return fetch(url, options)
      .then(response => response.json())
      .then(({ films }) => {
        this.incrementPage();
        return films;
      })
      .catch(err => console.log(err))
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


// async function getMovies(url) {
//     const resp = await fetch(url, options)
//     const data = await resp.json()
//     console.log(data);
// }

// getMovies('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=terminator&page=1')