const utils = require('../utils/writer.js')
const Facts = require('../service/FactsService')

function listCategories (req, res, next) {
  Facts.listCategories()
    .then((response) => {
      utils.writeJson(res, response)
    })
    .catch((response) => {
      utils.writeJson(res, response)
    })
}

function randomFact (req, res, next) {
  const category = req.swagger.params['category'].value
  Facts.randomFact(category)
    .then((response) => {
      utils.writeJson(res, response)
    })
    .catch((response) => {
      utils.writeJson(res, response)
    })
}

function search (req, res, next) {
  const query = req.swagger.params['query'].value
  Facts.search(query)
    .then((response) => {
      utils.writeJson(res, response)
    })
    .catch((response) => {
      utils.writeJson(res, response)
    })
}

module.exports = {listCategories, randomFact, search}
