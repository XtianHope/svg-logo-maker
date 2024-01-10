const Square = require('./lib/shapes').Square;

// Test to generate square SVG
test('Generate Square SVG Markup', () => {
  const square = new Square('red');
  const squareSVG = square.render();
  expect(squareSVG).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
});