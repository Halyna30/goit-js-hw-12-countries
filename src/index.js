import fetchCountries from './js/fetch.js';
import updateMarkup from './js/update-markup';

const _ = require('lodash');

const refs = {
  inputRef: document.querySelector('#exampleDataList'),
  list: document.querySelector('.list'),
};

refs.inputRef.addEventListener(
  'input',
  _.debounce(event => {
    const inputText = event.target.value;

    refs.list.innerHTML = '';
    fetchCountries(inputText).then(countries => updateMarkup(countries));
  }, 500),
);
