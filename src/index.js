import filmsTmp from './templates/films.hbs';
import NewsApiService from './js/news-service';
import rating from './js/rating.js' 
import './sass/main.scss';



export const refs = {
    searchForm: document.querySelector('.js-search-form'),
    movies: document.querySelector('.movies'),
    button: document.querySelector('.btn'),
    rating: document.querySelector('.movie-average'),
    input: document.querySelector('#searchQuery')
};


const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  
    if (newsApiService.query === '') {
        return alert('Введи что-то нормальное');
  }
  newsApiService.resetPage();
  clearArticlesContainer();
  fetchFilms();
  refs.input.value = '';
  console.log(res.results);
}

function fetchFilms() {
  newsApiService.fetchFilms().then(res => {
    console.log(res);
    appendArticlesMarkup(res);
  });
   
}

fetchTop()

function fetchTop() {
  newsApiService.fetchFilmsTop().then(res => {
    console.log(res);
    appendArticlesMarkup(res)
  })
}

function appendArticlesMarkup(res) {
  refs.movies.insertAdjacentHTML('beforeend', filmsTmp(res));
}

function clearArticlesContainer() {
  refs.movies.innerHTML = '';
}

function getRating() {
    if (refs.rating.textContent >= 7) {
        console.log(refs.rating.textContent);
       return refs.rating.classlist.add('green');
    } else if (refs.rating.textContent > 5) {
        return refs.rating.classlist.add('orange');
    } else {
        return refs.rating.classlist.add('red');
    }
}

 