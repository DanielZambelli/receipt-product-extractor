const vision = require('@google-cloud/vision')

async function fetchTextFromImage(imageSrc) {
  const client = new vision.ImageAnnotatorClient()
  const [result] = await client.textDetection(imageSrc)
  return result.fullTextAnnotation.text.split('\n')
}

module.exports = fetchTextFromImage
