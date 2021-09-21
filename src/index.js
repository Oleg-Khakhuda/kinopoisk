import filmsTmp from './templates/films.hbs';
import NewsApiService from './js/news-service';
import './sass/main.scss';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    movies: document.querySelector('.movies'),
    button: document.querySelector('.btn')
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.button.addEventListener('click', fetchFilms);

function onSearch(e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
        return alert('Введи что-то нормальное');
    }
}

function fetchFilms() {
//   loadMoreBtn.disable();
    newsApiService.fetchFilms().then(articles => {
      console.log(articles);
    appendArticlesMarkup(articles);
    // loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.movies.insertAdjacentHTML('beforeend', filmsTmp(articles));
    
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}