import apiKey from '../apiKey'
export default getSearchResults = (search, page) => {
    console.log(`http://www.omdbapi.com/?apikey=${apiKey.API_KEY}&s=${search}&page=${page}`)
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey.API_KEY}&s=${search}&page=${page}`)
    .then(response => response.json());
}