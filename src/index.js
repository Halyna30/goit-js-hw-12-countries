// var debounce = require('lodash.debounce');

// const inputRef = document.querySelector('#input');

// inputRef.addEventListener(
//   'input',
//   _.debounce(event => {
//     console.log(event.data);
//   }),
// );
console.log("Hello from index.js");

fetch('https://restcountries.eu/rest/v2/name/eesti')
  .then(res => res.json())
  .then(data => console.log(data));
