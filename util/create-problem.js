const fs = require('fs');
const path = require('path');

const ERRORS = {};

ERRORS.USAGE = `Please specify difficulty level, problem name, and function name!
npm run create <level> <problem name> <function name>
  <level> easy | medium | hard
  <problem name> two-sum
  <function name> twoSum
For example:
  npm run create medium atoi atoi`;
ERRORS.ALREADY_EXISTS = `Error: directory already exists!`;

const reportError = (message = 'An error occurred') => {
  console.log(message);
  process.exit();
};

const getDirectoryName = (difficulty) => {
  if (difficulty === 'easy' || difficulty === '1') {
    return '1-easy';
  }
  if (difficulty === 'medium' || difficulty === '2') {
    return '2-medium';
  }
  if (difficulty === 'hard' || difficulty === '3') {
    return '3-medium';
  }
  reportError(ERRORS.USAGE);
};

const getProblemFileText = (functionName) => {
  return `

module.exports = ${functionName};\n`;
};

const getTestFileText = (problemName, functionName) => {
  return `const ${functionName} = require('./${problemName}.js');

test('', () => {

});
`;
}

if (process.argv.length !== 5) reportError(ERRORS.USAGE);

try {
  const directory = getDirectoryName(process.argv[2]);
  const problemName = process.argv[3];
  const fullPath = path.resolve(__dirname, '..', 'problems', directory, problemName);
  const functionName = process.argv[4];

  if (fs.existsSync(fullPath)) {
    reportError(ERRORS.ALREADY_EXISTS);
  }

  fs.mkdirSync(fullPath);

  const problemFile = path.join(fullPath, problemName + '.js');
  const problemFileData = getProblemFileText(functionName);
  fs.writeFileSync(problemFile, problemFileData);

  const testFile = path.join(fullPath, problemName + '.test.js');
  const testFileData = getTestFileText(problemName, functionName);
  fs.writeFileSync(testFile, testFileData);

  console.log(`\nFiles created successfully!`);
} catch (error) {
  reportError(error);
}

