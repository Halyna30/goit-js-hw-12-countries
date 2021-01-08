import item from '../templates/item.hbs';
import items from '../templates/items.hbs';

const refs = {
  list: document.querySelector('.list'),
};

function updateItem(countries) {
  const markup = item(countries);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function updateItems(countries) {
  const markup = items(countries);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export { updateItem, updateItems };
