const createSpiral = (n) => {
  const output = [];
  if ( isValid(n) ) {
    return Array.of(buildArrayOfN([], 1, Math.abs(0 - n)));
  }

  return output;
};

const isValid = (n) => Number.isInteger(n) && n > 0;

const buildArrayOfN = (arr, start, end) => {
  return (start !== end + 1) ? buildArrayOfN(arr.concat(start), start + 1, end ) : arr;
};

module.exports = { createSpiral, buildArrayOfN };
