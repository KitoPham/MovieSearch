const API_KEY = 'de5623cb';
const fetch = require('node-fetch');

  
getImdb('guardians')
    .then(user => console.log(user))
    .catch(err => console.log(err));