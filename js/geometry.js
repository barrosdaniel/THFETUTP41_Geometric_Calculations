// Rectangle Area
function calculateRectangleArea(width, height) {
  return width * height;
}

// Prism Volume
function calculatePrismVolume(width, height, length) {
  return width * height * length;
}

// Circle Area
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// Sphere Volume
function calculateSphereVolume(radius) {

  return 4 / 3 * Math.PI * Math.pow(radius, 3);
}

console.log(calculateRectangleArea(5, 22));
console.log(calculatePrismVolume(4.5, 12.5, 17.4));
console.log(calculateCircleArea(7.2));
console.log(calculateSphereVolume(7.2));