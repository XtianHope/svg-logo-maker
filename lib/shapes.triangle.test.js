const Triangle = require('./lib/shapes').Triangle;

// Test to generate a triangle SVG
test('Generate Triangle SVG Markup', () => {
  const triangle = new Triangle('green');
  const triangleSVG = triangle.render();
  expect(triangleSVG).toEqual('<polygon points="100,20 40,180 190,180" fill="green" />');
});