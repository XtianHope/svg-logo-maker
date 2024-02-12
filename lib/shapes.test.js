const { Circle, Square, Triangle } = require("./shapes");

// Test for generating a circle SVG
describe('Circle', () => {
    test('rendering circle', () => {
      const circle = new Circle('blue');
      const svg = circle.render();
      expect(svg).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
    });
  });


// Test to generate a triangle SVG
describe('Triangle', () => {
    test('rendering triangle', () => {
      const triangle = new Triangle('green');
      const svg = triangle.render();
      expect(svg).toEqual('<polygon points="100,20 40,180 190,180" fill="green" />');
    });
  });


// Test to generate square SVG
describe('Square', () => {
    test('rendering square', () => {
      const square = new Square('red');
      const svg = square.render();
      expect(svg).toEqual('<rect x="50" y="50" width="100" height="100" fill="red" />');
    });
  });

