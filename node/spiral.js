const createSpiral = (n) => {
  const output = [];
  if ( isValid(n) ) {
    output.push(Array.of(n));
  }

  return output;
};

const isValid = (n) => Number.isInteger(n) && n > 0;

const buildArrayOfN = (arr, n) => {
  return n > 0 ? buildArrayOfN(arr.concat(n), n - 1) : arr;
};

module.exports = { createSpiral, buildArrayOfN };
