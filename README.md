# img-to-canvas

Convert an img tag into an (optionally cropped) blob (works only in browser).

## Usage

  * `img` an `<img>` element
  * `x` the distance along the x axis to begin cropping
  * `y` the distance along the y axis to begin cropping
  * `width` the width of the section you want to crop
  * `height` the height of the section you want to crop
  * `scaleWidth` scale the final image up/down to this width (optional - defaults to `width`)
  * `scaleHeight` scale the final image up/down to this height (optional - defaults to `height`)


Returns a blob containing the cropped image.

## Example

```javascript
var img = document.querySelector('#img-to-crop')
var blob = cropImage(img, 20, 20, 40, 40)
upload(blob)
```

Takes `#img-to-crop` and generates a blob that contains a 40x40 square of pixels 20 pixels into the image along each axis.