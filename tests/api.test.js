const request = require('supertest')
const app = require('../server')

describe('Diagional difference', () => {
  it('Diagional difference should be 1', async () => {
    const res = await request(app)
      .post('/diagonal-difference')
      .send({
        matrix: [[5,3,3], [3,6,3], [3,3,2]],
        length: 3
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual(1)
  })
})

describe('Diagional difference', () => {
  it('Diagional difference should be 0', async () => {
    const res = await request(app)
      .post('/diagonal-difference')
      .send({
        matrix: [[3,3,3], [3,3,3], [3,3,3]],
        length: 3
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual(0)
  })
})

describe('Diagional difference', () => {
  it('Diagional difference should be 15', async () => {
    const res = await request(app)
      .post('/diagonal-difference')
      .send({
        matrix: [[11,2,4], [4,5,6], [10,8,-12]],
        length: 3
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual(15)
  })
})