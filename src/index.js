import filmsTmp from './templates/films.hbs';
import NewsApiService from './js/news-service';
import rating from './js/rating.js' 
import './sass/main.scss';


const refs = {
    searchForm: document.querySelector('.js-search-form'),
    movies: document.querySelector('.movies'),
  button: document.querySelector('.btn'),
    rating: document.querySelector('.movie-average')
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.button.addEventListener('click', fetchFilms);

function onSearch(e) {
    e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  clearArticlesContainer()
    if (newsApiService.query === '') {
        return alert('Введи что-то нормальное');
  }
}

function fetchFilms() {
//   loadMoreBtn.disable();
  newsApiService.fetchFilms().then(films => {
      console.log(films);
    appendArticlesMarkup(films);
    // loadMoreBtn.enable();
  });
}

fetchTop()

function fetchTop() {
  newsApiService.fetchFilmsTop().then(films => {
    console.log(films);
    appendArticlesMarkup(films)
  })
}

function appendArticlesMarkup(films) {
  refs.movies.insertAdjacentHTML('beforeend', filmsTmp(films));
    
}

function clearArticlesContainer() {
  refs.movies.innerHTML = '';
}


