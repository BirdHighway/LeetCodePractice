/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);
  let c, sign = null, digits = '', i = 0;
  while (c = s.charAt(i++)) {
    if (sign === null) {
      if (c === ' ') continue;
      if (c === '-' || c === '+') {
        sign = c === '-' ? -1 : 1;
        continue;
      }
    }
    if (c > '/' && c < ':') {
      sign = sign === null ? 1 : sign;
      digits += c;
      continue;
    }
    break;
  }
  if (digits === '') return 0;
  result = sign * digits;
  if (result > MAX_INT) return MAX_INT;
  if (result < MIN_INT) return MIN_INT;
  return result;
};

module.exports = myAtoi;
