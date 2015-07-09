var imgToCanvas = require('img-to-canvas')
var toBlob = require('canvas-to-blob')

module.exports = function(img, x, y, width, height) {
  return toBlob(imgToCanvas(img, x, y, width, height).toDataURL('image/png'))
}