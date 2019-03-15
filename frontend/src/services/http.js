function _serializeParams (params) {
  return ''
}

function http (baseUrl) {
  return {
    get: (url, params) => fetch(`${baseUrl}${url}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        params: _serializeParams(params)
      }
    })
      .then(res => res.json())
  }
}

export default http