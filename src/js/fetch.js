import toastr, { error } from 'toastr';
import { updateItem, updateItems } from './update-markup';

const showToastrInfo = () =>
  toastr['warning']('Введіть більш конкретний запит', 'Забагато співпадінь');
const showToastrError = () =>
  error('Уточніть запит', 'Помилка!Такої країни не існує');

toastr.options = {
  progressBar: true,
  showDuration: '0',
  timeOut: '2500',
  showMethod: 'show',
};

function fetchCountries(inputText) {
  return fetch(`https://restcountries.eu/rest/v2/name/${inputText}`)
    .then(res => res.json())
    .then(data => {
      if (data.status === 404) {
        showToastrError();
        return;
      }
      if (data.length > 10) {
        showToastrInfo();
      }
      if (data.length === 1) {
        updateItem(data);
      } else if (data.length > 1 && data.length < 10) {
        updateItems(data);
      }
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
