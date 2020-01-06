const createSpiral = (n) => {
  let output = [];
  if ( isValid(n) ) {
    output.push(Array.of(n));
  }

  return output;
};

const isValid = (n) => Number.isInteger(n) && n > 0;

module.exports = { createSpiral };
