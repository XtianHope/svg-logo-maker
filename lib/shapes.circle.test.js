const { generateShape } = require('./lib/shapes');

// Test for generating a circle SVG
test('Generate Circle SVG Markup', () => {
  const circleSVG = generateShape('circle', 'blue');
  expect(circleSVG).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});