// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

//Long solution
function getSize(width, height, depth) {
  var area = ((width * depth) + (depth * height) + (width * height)) * 2
  var volume = (width * height * depth)
  
  return [area, volume]
}

//Short solution
const getSize = (w, h, d) => [((w * d) + (d * h) + (w * h)) * 2, (w * h * d)]
