const Products = require('./products')
const toTitle = product => product.title

describe(Products, () => {

  beforeAll(() => {
    Products.data = [
      { id: 1, title: 'monkey' },
      { id: 2, title: 'hat' },
      { id: 3, title: 'phone' },
      { id: 4, title: 'mouse' },
    ]
  })

  it('is defined', () => {
    expect(Products).toBeDefined()
  })

  it('matches entire words', () => {
    const results = Products.getMatching(['ey','at','one','mouse']).map(toTitle)
    expect(results).toEqual(['mouse'])
  })

  it('get matching products', () => {
    const results = Products.getMatching(['hat','phone']).map(toTitle)
    expect(results).toEqual(['hat','phone'])
  })

  it('get matching product with data', () => {
    const results = Products.getMatching(['mouse'])
    expect(results).toEqual([{ id: 4, title: 'mouse' }])
  })

  it('get matching with crazy words', () => {
    const results = Products.getMatching(['1 mouse','crazy hat','worn by the monkey']).map(toTitle)
    expect(results).toEqual(['monkey','hat','mouse'])
  })

})
