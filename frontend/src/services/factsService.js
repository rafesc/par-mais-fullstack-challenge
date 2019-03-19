import swagger from '../api'

function client () {
  return swagger.then((_client) => _client.apis.facts)
}

export function getRandomFact (category = '') {
  return client().then((_client) => _client.randomFact({category}))
}

export function getSearchResults (query = '') {
  return client().then((_client) => _client.search({query}))
}

export function getCategories () {
  return client().then((_client) => _client.listCategories())
}