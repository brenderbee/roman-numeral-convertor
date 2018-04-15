import { Convert } from '../src/convert.js';

describe('Convert', function() {

  it('should test whether a valid single number of 1, 2, 3, and 5 returns a single numeral', function(){
    var inputNumber = [1];
    var convertedNumber = Convert(inputNumber);
    expect(convertedNumber).toEqual("I");
  });

  it('should test whether a 4 returns a single numeral', function(){
    var inputNumber = [4];
    var convertedNumber = Convert(inputNumber);
    expect(convertedNumber).toEqual("IV");
  });

  it('should test whether a 9 returns a single numeral', function(){
    var inputNumber = [9];
    var convertedNumber = Convert(inputNumber);
    expect(convertedNumber).toEqual("IX");
  });

  it('should test whether a number that is the sum of base roman numerals and returns a roman numeral', function(){
    var inputNumber = [6, 6];
    var convertedNumber = Convert(inputNumber);
    expect(convertedNumber).toEqual("LXVI");
  });

  it('should test whether a number that is not the sum of base roman numerals and returns a roman numeral', function(){
    var inputNumber = [3, 4];
    var convertedNumber = Convert(inputNumber);
    expect(convertedNumber).toEqual("XXXIV");
  });
});
