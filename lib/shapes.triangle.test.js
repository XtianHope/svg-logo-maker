const { generateShape } = require('./lib/shapes');


// Test for generating a triangle SVG
test('Generate Triangle SVG Markup', () => {
    const triangleSVG = generateShape('triangle', 'green');
    expect(triangleSVG).toEqual('<polygon points="100,20 40,180 190,180" fill="green" />');
  });