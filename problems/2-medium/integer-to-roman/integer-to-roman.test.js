const intToRoman = require('./integer-to-roman.js');

test('simple number', () => {
  const num = 3;
  expect(intToRoman(num)).toEqual('III');
});

test('substractive number five', () => {
  const num = 4;
  expect(intToRoman(num)).toEqual('IV');
});

test('subtractive number ten', () => {
  const num = 9;
  expect(intToRoman(num)).toEqual('IX');
});

test('fifty-eight', () => {
  const num = 58;
  expect(intToRoman(num)).toEqual('LVIII');
});

test('number over one thousand', () => {
  const num = 1994;
  expect(intToRoman(num)).toEqual('MCMXCIV');
});
