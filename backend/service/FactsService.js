/**
 * TODO: This service should proxy the request to the Chuck Norris API (https://api.chucknorris.io)
 * Refer to the API definitions in the provided swagger file for response and request compliance.
 **/

const { ifElse, pipe, prop } = require('ramda')
const norrisClient = require('../api')

const {_greaterThan, _parseCategory, _mapToEndpoints} = require('./helpers')

/**
 * Retrieve a list of available categories.
 *
 * returns List
 **/
function listCategories () {
  return norrisClient.then(_mapToEndpoints()).then(_listCategories).then(prop('body'))
}

/**
 * Retrieve a random Chuck Norris joke in JSON format.
 * You may set the category parameter in order to filter the facts by it
 *
 * category String  (optional)
 * returns Fact
 **/
function randomFact (category = '') {
  let _category = _parseCategory(category)

  return norrisClient.then(_mapToEndpoints()).then(pipe(_parseCategory, _randomFact)(_category)).then(prop('body'))
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
    _greaterThan(2),
    (_query) => norrisClient.then(_mapToEndpoints()).then(_search(_query)).then(prop('body')),
    () => Promise.resolve(emptyQueryResponse)
  )(query)
}

const emptyQueryResponse = Object.freeze({ total: 0, result: [] })

const _listCategories = (endpoints) => endpoints.listCategories()

const _randomFact = (category) => (endpoints) => endpoints.randomFact({ category })

const _search = (query) => (endpoints) => endpoints.search({ query })

module.exports = {
  listCategories,
  randomFact,
  search
}
