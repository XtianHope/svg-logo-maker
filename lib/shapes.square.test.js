const { generateShape } = require('./lib/shapes');

// Test for generating a square SVG
test('Generate Square SVG Markup', () => {
    const squareSVG = generateShape('square', 'red');
    expect(squareSVG).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
  });