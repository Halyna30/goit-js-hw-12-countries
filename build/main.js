(()=>{"use strict";console.log("Hello from index.js"),fetch("https://restcountries.eu/rest/v2/name/eesti").then((function(e){return e.json()})).then((function(e){return console.log(e)}))})();