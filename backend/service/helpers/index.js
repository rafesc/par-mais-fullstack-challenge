const { anyPass, includes, ifElse, isEmpty, lt, pipe, prop, values } = require('ramda')
const Categories = require('../../constants/categories')

const EMPTY_STRING = ''

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

module.exports = {
  _isValidCategoryValue: isValidCategoryValue,
  _mapToEndpoints: mapToEndpoints,
  _parseCategory: parseCategory,
  _greaterThan: greaterThan
}