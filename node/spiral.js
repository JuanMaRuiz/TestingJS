const createSpiral = (n) => {
  let output = [];
  if ( isValid(n) ) {
    output.push(Array.of(n));
  }

  return output;
};

const isValid = (n) => Number.isInteger(n) && n > 0;

const buildArrayOfN = (arr, n) => {
  if ( n === 0 ) {
    return arr;
  }
  return buildArrayOfN(Array.of(n).concat(n), n-1);
};

module.exports = { createSpiral, buildArrayOfN };
