/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0) return false;
  const s = x.toString();
  if (s.length === 1) return true;
  let a = 0,
    b = s.length - 1;
  while (a < b) {
    if (s.charAt(a) !== s.charAt(b)) return false;
    a++;
    b--;
  }
  return true;
};

module.exports = isPalindrome;
