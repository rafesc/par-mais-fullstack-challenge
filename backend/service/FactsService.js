/**
 * TODO: This service should proxy the request to the Chuck Norris API (https://api.chucknorris.io)
 * Refer to the API definitions in the provided swagger file for response and request compliance.
 **/

const { anyPass, includes, ifElse, isEmpty, lt, pipe, prop, values } = require('ramda')
const Categories = require('../constants/categories')
const norrisClient = require('../api')

const EMPTY_STRING = ''

/**
 * Retrieve a list of available categories.
 *
 * returns List
 **/
function listCategories () {
  return norrisClient.then(mapToEndpoints()).then(_listCategories).then(prop('body'))
}

/**
 * Retrieve a random Chuck Norris joke in JSON format.
 * You may set the category parameter in order to filter the facts by it
 *
 * category String  (optional)
 * returns Fact
 **/
function randomFact (category = '') {
  let _category = parseCategory(category)

  return norrisClient.then(mapToEndpoints()).then(pipe(parseCategory, _randomFact)(_category)).then(prop('body'))
}

/**
 * Free text search.
 * You may set the category parameter in order to filter the facts by it
 *
 * query String
 * returns SearchResult
 **/
function search (query = '') {
  return ifElse(
    greaterThan(2),
    (_query) => norrisClient.then(mapToEndpoints()).then(_search(_query)).then(prop('body')),
    () => Promise.resolve(emptyQueryResponse)
  )(query)
}

function mapToEndpoints () {
  return pipe(
    prop('apis'),
    prop('facts')
  )
}

function parseCategory (category) {
  return ifElse(
    isValidCategoryValue(category),
    () => category,
    () => EMPTY_STRING
  )(values(Categories))
}

function isValidCategoryValue (category) {
  return anyPass([
    () => isEmpty(category),
    includes(category)
  ])
}

function greaterThan (length) {
  return pipe(
    prop('length'),
    lt(length)
  )
}

const emptyQueryResponse = Object.freeze({ total: 0, result: [] })

const _listCategories = (endpoints) => endpoints.listCategories()

const _randomFact = (category) => (endpoints) => endpoints.randomFact({ category })

const _search = (query) => (endpoints) => endpoints.search({ query })

module.exports = {
  listCategories,
  randomFact,
  search,
  /* exposing utility functions for testing */
  _isValidCategoryValue: isValidCategoryValue,
  _mapToEndpoints: mapToEndpoints,
  _parseCategory: parseCategory,
  _greaterThan: greaterThan
}
