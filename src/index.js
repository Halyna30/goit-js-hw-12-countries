console.log('Hello from index.js-1');

var debounce = require('debounce');
// var debounce = require('lodash.debounce');
// console.log(debounce);

const inputRef = document.querySelector('#exampleDataList');

inputRef.addEventListener(
  'input',
  debounce(event => {
    console.log(event.data);
  }, 500),
);

console.log('Hello from index.js-2');

// fetch('https://restcountries.eu/rest/v2/name/eesti')
//   .then(res => res.json())
//   .then(data => console.log(data));
