import { expect } from 'chai';
import { it } from 'mocha';
import calc from '../src/index';

describe('Main', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist', () => {
      expect(calc).to.exist;
    });

    it('should exist the `sum` method', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the `sub` method', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the `div` method', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist the `mul` method', () => {
      expect(calc.mul).to.exist;
      expect(calc.mul).to.be.a('function');
    });


  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it('should return -44 when `sub(6,10)`', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mul', () => {
    it('should return 4 when `mul(2,2)`', () => {
      expect(calc.mul(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(16, 4)`', () => {
      expect(calc.div(16, 4)).to.be.equal(4);
    });

    it('should return `Cannot divide by zero` when divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('Cannot divide by zero');
    })
  })
});
