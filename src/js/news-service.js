const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

// const options = {
//   headers: {
//     "Content-Type": "application/json",
//     'X-API-KEY': API_KEY
//   }
// };

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
     const url = `${BASE_URL}/search/movie?query=${this.searchQuery}&${API_KEY}&page=${this.page}`
    return fetch(url)
      .then(response => response.json())
    // .then(data => console.log(data))
      .then(({ results }) => {
        // this.incrementPage();
        return results;
      })
      .catch(err => console.log(err))
  }

  fetchFilmsTop() {
    const url = API_URL
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        // this.incrementPage();
        return results;
      })
      .catch(err => console.log(err))
  }

  // incrementPage() {
  //   this.page += 1;
  // }

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