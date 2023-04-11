const { Circle, Triangle, Square } = require('./shapes.js');


describe('circle', () => {
    it('should return a circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        const expectedShape = `<circle r="80" cx="150" cy="150" fill="red"/>`
        expect(shape.render()).toBe(expectedShape);
    });
});

describe('Triangle', () => {
    it('should return a triangle', () => {
        const shape = new Triangle();
        shape.setColor('green');
        const expectedShape = `<polygon points="150,18 244,182 56,182" fill="green"/>`;
        expect(shape.render()).toBe(expectedShape);
    });
});

describe('square', () => {
    it('should render a square', () => {
        const shape = new Square();
        shape.setColor('purple');
        const expectedShape = `<rect x="90" y="40" width="120" height="120" fill="purple"/>`;
        expect(shape.render()).toBe(expectedShape);
        
    });
});