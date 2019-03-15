import http from './http'

let api = {
  baseUrl: 'http://localhost:1815/api/jokes',
  endpoints: {
    CATEGORIES: '/categories',
    RANDOM: '/random',
    SEARCH: '/search'
  }
}

let _http = http(api.baseUrl)

export function getRandom () {
  return _http.get(api.endpoints.RANDOM)
}