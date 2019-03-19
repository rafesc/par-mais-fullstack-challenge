import { getCategories, getRandomFact, getSearchResults } from '../services/factsService'

const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
const FETCH_LIST = 'FETCH_LIST'
const FETCH_RANDOM = 'FETCH_RANDOM'

const RESET_LIST = 'RESET_LIST'
const RESET_RANDOM = 'RESET_RANDOM'

const fetchCategories = () => {
  return (dispatch) => getCategories()
    .then(({ body: payload }) => dispatch({
      type: FETCH_CATEGORIES,
      payload
    }))
}

const fetchFactsList = (query = '') => {
  return (dispatch) => getSearchResults(query)
    .then((result) => {
      resetRandomFact()(dispatch)

      return result
    })
    .then(({ body: payload }) => dispatch({
      type: FETCH_LIST,
      payload: payload.result
    }))
}

const fetchRandomFact = (category = '') => {
  return (dispatch) => getRandomFact(category)
    .then((result) => {
      resetFactsList()(dispatch)

      return result
    })
    .then(({ body: payload }) => dispatch({
      type: FETCH_RANDOM,
      payload: [payload]
    }))
}

const resetRandomFact = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_RANDOM,
      payload: []
    })
  }
}

const resetFactsList = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_LIST,
      payload: []
    })
  }
}

export {
  FETCH_CATEGORIES, FETCH_LIST, FETCH_RANDOM, RESET_LIST, RESET_RANDOM,
  fetchCategories, fetchFactsList, fetchRandomFact, resetFactsList, resetRandomFact
}