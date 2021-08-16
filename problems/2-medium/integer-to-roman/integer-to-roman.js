/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let objectMap = [
    [
      { value: 1000, letter: 'M' },
      { value: 900, letter: 'CM' },
      { value: 500, letter: 'D' },
      { value: 400, letter: 'CD' }
    ],
    [
      { value: 100, letter: 'C' },
      { value: 90, letter: 'XC' },
      { value: 50, letter: 'L' },
      { value: 40, letter: 'XL' }
    ],
    [
      { value: 10, letter: 'X' },
      { value: 9, letter: 'IX' },
      { value: 5, letter: 'V' },
      { value: 4, letter: 'IV' }
    ],
    [
      { value: 1, letter: 'I' }
    ]
  ];
  let s = '';
  objectMap.forEach((objArray) => {
    let orderObj = objArray.shift();
    let count = Math.floor(num / orderObj.value);
    num %= orderObj.value;
    s += orderObj.letter.repeat(count);
    let obj;
    while(obj = objArray.shift()) {
      if (num >= obj.value) {
        s += obj.letter;
        num -= obj.value;
      }
    }
  });
  return s;
};

module.exports = intToRoman;
