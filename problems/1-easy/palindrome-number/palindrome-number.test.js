const isPalindrome = require('./palindrome-number.js');

test('correctly identifies palidrome numbers', () => {
  const num1 = 121;
  expect(isPalindrome(num1)).toBe(true);

  const num2 = 123454321;
  expect(isPalindrome(num2)).toBe(true);

  const num3 = 9009;
  expect(isPalindrome(num3)).toBe(true);

  const num4 = 1;
  expect(isPalindrome(num4)).toBe(true);
});

test('correctly identifies non-palidrome numbers', () => {
  const num1 = 1213;
  expect(isPalindrome(num1)).toBe(false);

  const num2 = -121;
  expect(isPalindrome(num2)).toBe(false);

  const num3 = 12345;
  expect(isPalindrome(num3)).toBe(false);

  const num4 = 9909;
  expect(isPalindrome(num4)).toBe(false);
});
