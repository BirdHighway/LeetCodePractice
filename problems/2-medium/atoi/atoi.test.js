const myAtoi = require('./atoi.js');

test('works when all characters are digits', () => {
  const s = '42';
  expect(myAtoi(s)).toBe(42);
});

test('works on negative numbers', () => {
  const s = '-42';
  expect(myAtoi(s)).toBe(-42);
});

test('rejects multiple signs', () => {
  const s1 = '-+12';
  expect(myAtoi(s1)).toBe(0);
  const s2 = '+-8';
  expect(myAtoi(s2)).toBe(0);
});

test('rejects repeated signs', () => {
  const s1 = '--12';
  expect(myAtoi(s1)).toBe(0);
  const s2 = '++12';
  expect(myAtoi(s2)).toBe(0);
});


test('works with words appended', () => {
  const s = '4193 with words';
  expect(myAtoi(s)).toBe(4193);
});

test('returns 0 when started with words', () => {
  const s = 'words and 987';
  expect(myAtoi(s)).toBe(0);
});

test('works with leading whitespace', () => {
  const s = '    1987';
  expect(myAtoi(s)).toBe(1987);
});

test('clamps overflowing ints', () => {
  const s = '-91283472332';
  expect(myAtoi(s)).toBe(-2147483648);
});

