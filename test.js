const assert = require("assert");
import Numeral from './Numeral';

describe("Numeral.toString()", () => {
  it('1 should return "one"', () => {
    assert.equal(new Numeral(1).toString(), "one");
  });
  it('5 should return "five"', () => {
    assert.equal(new Numeral(5).toString(), "five");
  });
  it('21 should return "twenty one"', () => {
    assert.equal(new Numeral(21).toString(), "twenty one");
  });
  it('34 should return "thirty four"', () => {
    assert.equal(new Numeral(34).toString(), "thirty four");
  });
  it('40 should return "fourty"', () => {
    assert.equal(new Numeral(40).toString(), "fourty");
  });
  it('100 should return "one hundred"', () => {
    assert.equal(new Numeral(100).toString(), "one hundred");
  });
  it('121 should return "one hundred and twenty one"', () => {
    assert.equal(new Numeral(121).toString(), "one hundred and twenty one");
  });
  it('1000 should return "one thousand"', () => {
    assert.equal(new Numeral(1000).toString(), "one thousand");
  });
  it('1123 should return "one thousand one hundred and twenty three"', () => {
    assert.equal(new Numeral(1123).toString(), "one thousand one hundred and twenty three");
  });
});
