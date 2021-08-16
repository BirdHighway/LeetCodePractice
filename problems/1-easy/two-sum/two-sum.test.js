const twoSum = require('./two-sum.js');

test('finds indices of nums that add up to target', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('finds correct indices when nums identical', () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});
