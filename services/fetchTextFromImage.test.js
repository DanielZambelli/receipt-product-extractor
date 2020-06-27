const fetchTextFromImage = require('./fetchTextFromImage')

describe(fetchTextFromImage, () => {

  it('returns something', async () => {
    const res = await fetchTextFromImage('./public/receipt-a.jpg')
    console.log( res )
    expect(res).toBeDefined()
  })

})
