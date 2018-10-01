import apiKey from '../apiKey';

export const PERFORM_SEARCH = 'movie-search/repos/LOAD';
export const PERFORM_SEARCH_SUCCESS = 'movie-search/repos/LOAD_SUCCESS';
export const PERFORM_SEARCH_FAIL = 'movie-search/repos/LOAD_FAIL';
export const ADD_SEARCH = "movie-search/ADD";
export const ADD_SEARCH_SUCCESS = "movie-search/ADD_SUCCESS";
export const ADD_SEARCH_FAIL = "movie-search/ADD_FAIL";

export default function reducer(state = { searchResults: [] }, action) {
  switch (action.type) {
    case PERFORM_SEARCH:
      return { ...state, loading: true };
    case PERFORM_SEARCH_SUCCESS:
      if(action.payload.data.Search){
        return { ...state, loading: false, searchResults: action.payload.data.Search};
      }
    case PERFORM_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case ADD_SEARCH:
      return{...state, loading: true};
    case ADD_SEARCH_SUCCESS:
      const newResults = state.searchResults.concat(action.payload.data.Search)
      return{...state, loading: false, searchResults: newResults};
    case ADD_SEARCH_FAIL:
    return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}



export function performSearch(search, page, type) {
  console.log(`Performing search :  /?apikey=${apiKey.API_KEY}&s=${search}&page=${page}`)
  return {
    type: type,
    payload: {
      request: {
        url: `/?apikey=${apiKey.API_KEY}&s=${search}&page=${page}`
      }
    }
  };
}