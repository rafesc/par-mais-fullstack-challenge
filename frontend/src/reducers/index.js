import { combineReducers } from 'redux'

import { FETCH_CATEGORIES, FETCH_LIST, FETCH_RANDOM, RESET_LIST } from '../actions'

function categoriesList (state = [], { type, payload }) {
  switch (type) {
    case FETCH_CATEGORIES:
      return payload
    default:
      return state
  }
}

function factsList (state = [], { type, payload }) {
  switch (type) {
    case FETCH_LIST:
      return payload
    case RESET_LIST:
      return payload
    default:
      return state
  }
}

function randomFact (state = {}, { type, payload }) {
  switch (type) {
    case FETCH_RANDOM:
      return payload
    default:
      return state
  }
}

const app = combineReducers({
  categoriesList,
  factsList,
  randomFact
})

export default app