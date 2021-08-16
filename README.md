# LeetCode Practice Problems

## Testing
Each problem is in its own directory with its test file, so passing the directory name to the test command will run just the test for that problem.

```
# run tests for one problem
npm test problems/1-easy/two-sum

# run tests for one problem with watch
npm test -- problems/1-easy/two-sum --watch

# or, if already in problems/1-easy
npm test -- two-sum --watch
```

## Start a New Problem
Let's say you're starting a new medium-difficulty problem, "Container With Most Water", where the function to implement is called "maxArea".

```
npm run create medium container-with-most-water maxArea
```

After running this command we have:
```
problems/
  1-easy/
  2-medium/
    container-with-most-water/
      container-with-most-water.js
      container-with-most-water.test.js
```

The JavaScript file, container-with-most-water.js:
```

module.exports = maxArea;
```

And the test file, container-with-most-water.test.js:
```
const maxArea = require('./container-with-most-water.js');

test('', () => {

});
```