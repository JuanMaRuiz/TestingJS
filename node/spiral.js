const createSpiral = (n) => {
  let output;
  if ( !Number.isInteger(n) || n < 1 ) {
    output = [];
  } else {
    let tempArr = [];
    for ( let i = 1; i <= n*n; i++ ) {
      console.log(`i: ${i}`);
      tempArr.push(Array.from(i.toString()));
      console.log(`tempArr => ${tempArr}`);
    }
    output = tempArr;
  }

  console.log(`output => ${output}`);
  return output;
};

module.exports = { createSpiral };
