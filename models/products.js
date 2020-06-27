class Products {

  static data = [
    { id: 1, title: 'olives' },
    { id: 2, title: 'hummus' },
    { id: 3, title: 'pitta bread' },
    { id: 4, title: 'baba channuge' },
    { id: 5, title: 'chateau emilion' },
    { id: 6, title: 'sucuk izgara' },
    { id: 7, title: 'gallipoli specl grill' },
    { id: 8, title: 'stir-fried veg' },
    { id: 9, title: 'misc food' },
    { id: 10, title: 'turkish tea' },
    { id: 11, title: 'baklava' },
    { id: 12, title: 'brownie & ice cream' },

    { id: 13, title: 'mimosa' },
    { id: 14, title: 'bloody mary' },
    { id: 15, title: 'spin dip' },
    { id: 16, title: 'woozie' },
    { id: 17, title: 'pasta bravo' },
    { id: 18, title: 'eggs & bacon' },
    { id: 19, title: 'cheesecake' },
    { id: 20, title: 'tiramisu' },
  ]

  static getMatching(words){
    const products = Products.data.map(data => data.title)
    const regEx = new RegExp(products.join('|'), 'ig')
    let matchedProductTitles = words.join(' ').match(regEx) || []
    matchedProductTitles = matchedProductTitles.map(str => str.toLowerCase())
    const matchedProducts = Products.data.filter(product => matchedProductTitles.includes(product.title))
    return matchedProducts
  }

}

module.exports = Products
