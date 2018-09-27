const WORD_SEP = " ";
const AND_SEP = `${WORD_SEP}and${WORD_SEP}`;

const SINGLE_DIGIT_LENGTH = 1;
const DOUBLE_DIGIT_LENGTH = 2;
const HUNDRED_DIGIT_LENGTH = 3;
const THOUSAND_DIGIT_LENGTH = 4;
const TEN_THOUSAND_DIGIT_LENGTH = 5;

class Numeral {
  constructor(number) {
    this.number = number;
    this.numString = number.toString();
  }

  toString() {
    const { numString } = this;

    switch (numString.length) {
      case 1:
        return this._getSingleDigitLiteral();
      case 2:
        return this._getDoubleDigitLiteral();
      case 3:
        return this._getHundredDigitLiteral();
      case 4:
        return this._getThousandDigitLiteral();
      // case 5:
      //   return this._getTenThousandDigitLiteral();
    }
  }

  _getSingleDigitLiteral() {
    const { number } = this;
    const { prefixes } = this.constructor;
    return prefixes[number];
  }

  _getDoubleDigitLiteral() {
    const { number, numString } = this;
    const { prefixes } = this.constructor;
    if (number % 10 === 0) {
      return prefixes[number];
    } else {
      return (
        prefixes[parseInt(numString[0]) * 10] +
        WORD_SEP +
        prefixes[parseInt(numString[1])]
      );
    }
  }

  _getHundredDigitLiteral() {
    const { number, numString } = this;
    const { prefixes, suffixes } = this.constructor;
    if (number % 100 === 0) {
      return prefixes[numString[0]] + WORD_SEP + suffixes[HUNDRED_DIGIT_LENGTH];
    } else {
      return (
        new this.constructor(numString[0]).toString() +
        WORD_SEP +
        suffixes[HUNDRED_DIGIT_LENGTH] +
        AND_SEP +
        new this.constructor(parseInt(numString.slice(-2))).toString()
      );
    }
  }

  _getThousandDigitLiteral() {
    const { number, numString } = this;
    const { prefixes, suffixes } = this.constructor;
    if (number % 1000 === 0) {
      return (
        prefixes[numString[0]] + WORD_SEP + suffixes[THOUSAND_DIGIT_LENGTH]
      );
    } else {
      return (
        new this.constructor(numString[0]).toString() +
        WORD_SEP +
        suffixes[THOUSAND_DIGIT_LENGTH] +
        WORD_SEP +
        new this.constructor(parseInt(numString.slice(-3))).toString()
      );
    }
  }

  static get prefixes() {
    return {
      0: "",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",

      // Decades
      20: "twenty",
      30: "thirty",
      40: "fourty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety"
    };
  }

  static get suffixes() {
    return {
      3: "hundred",
      4: "thousand",
      5: "thousand"
    };
  }
}

export default Numeral;
