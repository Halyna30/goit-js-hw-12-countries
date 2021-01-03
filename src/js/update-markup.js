import item from '../templates/item.hbs';

const refs = {
  list: document.querySelector('.list'),
};

function updateMarkup(countries) {
  const markup = item(countries);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
