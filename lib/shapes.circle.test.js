const Circle = require('./lib/shapes').Circle;

// Test for generating a circle SVG
test('Generate Circle SVG Markup', () => {
  const circle = new Circle('blue');
  const circleSVG = circle.render();
  expect(circleSVG).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});