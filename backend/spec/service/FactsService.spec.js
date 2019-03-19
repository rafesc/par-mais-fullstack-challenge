require('../../utils/bootstrapServer')

const { equals, find, ifElse, isEmpty, or, pipe, prop, values } = require('ramda')

const Categories = require('../../constants/categories')

const EMPTY_STRING = ''

const FactsServiceHelper = require('../../service/helpers')

describe('FactsService', function () {

  describe('isValidCategoryValue', function () {

    let categoryValues = values(Categories)

    it('should return true with empty string', function () {
      expect(FactsServiceHelper._isValidCategoryValue(EMPTY_STRING)([])).toEqual(true)
    })

    it('should return true with existing element in Categories object', function () {
      expect(FactsServiceHelper._isValidCategoryValue(Categories.ANIMAL)(categoryValues)).toEqual(true)
    })

    it('should return false with non-empty, non-existing element in Categories object', function () {
      expect(FactsServiceHelper._isValidCategoryValue('invalid category')(categoryValues)).toEqual(false)
    })
  })

  describe('mapToEndpoints', function () {

    it('should have the necessary properties', function () {
      let dummy = {
        apis: {
          facts: {
            listCategories: () => {},
            randomFact: () => {},
            search: () => {}
          }
        }
      }

      let result = FactsServiceHelper._mapToEndpoints()(dummy)

      expect(result.listCategories).toBeDefined()
      expect(result.randomFact).toBeDefined()
      expect(result.search).toBeDefined()
    })

  })

  describe('parseCategory', function () {

    it('should return provided category if valid (EMPTY STRING)', function () {
      expect(FactsServiceHelper._parseCategory(EMPTY_STRING)).toEqual(EMPTY_STRING)
    })

    it('should return provided category if valid (existing category)', function () {
      expect(FactsServiceHelper._parseCategory(Categories.ANIMAL)).toEqual(Categories.ANIMAL)
    })

    it('should return empty string if provided category is invalid', function () {
      expect(FactsServiceHelper._parseCategory('invalid category')).toEqual(EMPTY_STRING)
    })

  })

  describe('greaterThan', function () {

    it('should return false for a string shorter than the given parameter', function () {
      let greaterThanTwo = FactsServiceHelper._greaterThan(2)

      expect(greaterThanTwo('')).toEqual(false)
      expect(greaterThanTwo('a')).toEqual(false)
      expect(greaterThanTwo('aa')).toEqual(false)
    })

    it('should return true for a string of equal length or longer than the given parameter', function () {
      let greaterThanTwo = FactsServiceHelper._greaterThan(2)

      expect(greaterThanTwo('aaa')).toEqual(true)
      expect(greaterThanTwo('aaaa')).toEqual(true)
    })

  })

})