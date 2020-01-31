var matrixService = require('../api/services/matrix.service');


describe('Diagional difference', () => {
    it('Diagional difference should be 1', () => {
      expect(matrixService.diagonalDifference([[5,3,3], [3,6,3], [3,3,2]], 3)).toBe(1)
    })
})


describe('Diagional difference', () => {
    it('Diagional difference should be 0', () => {
      expect(matrixService.diagonalDifference([[3,3,3], [3,3,3], [3,3,3]], 3)).toBe(0)
    })
})

describe('Diagional difference', () => {
    it('Diagional difference should be 15', () => {
      expect(matrixService.diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]], 3)).toBe(15)
    })
})