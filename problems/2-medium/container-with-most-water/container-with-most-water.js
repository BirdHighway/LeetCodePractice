/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  for (let a = 0; a < height.length - 1; a++) {
    let aHeight = height[a];
    if (aHeight === 0) continue;
    let zStart = a + 1;
    if (maxArea > 0) {
      zStart = a + Math.ceil(maxArea / aHeight)
      if (zStart >= height.length) continue;
    }
    for (let z = zStart; z < height.length; z++) {
      let lowerEnd = height[a] < height[z]  ? height[a] : height[z];
      let area = lowerEnd * (z - a);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};

module.exports = maxArea;
