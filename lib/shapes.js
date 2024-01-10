// Class for Circle shape
class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  // Class for Triangle shape
  class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="100,20 40,180 190,180" fill="${this.color}" />`;
    }
  }
  
  // Class for Square shape
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };