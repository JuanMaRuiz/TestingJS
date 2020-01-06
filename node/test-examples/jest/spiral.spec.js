const {createSpiral} = require('./../../spiral');

describe('Spiral tested with Jest Library', () => {
  test('it should return an empty array if n is not a Number', () => {
    expect(createSpiral()).toEqual([]);
    expect(createSpiral('a')).toEqual([]);
    expect(createSpiral('1')).toEqual([]);
    expect(createSpiral(true)).toEqual([]);
    expect(createSpiral(null)).toEqual([]);
    expect(createSpiral([])).toEqual([]);
    expect(createSpiral({})).toEqual([]);
  });
  test('it should return an empty array if n is < 1', () => {
    expect(createSpiral(0)).toEqual([]);
    expect(createSpiral(-1)).toEqual([]);
  });
  test('it should return [[1]] for n = 1', () => {
    expect(createSpiral(1)).toEqual([[1]]);
  });
  // TODO: Fix this test
  // test('it should return an array of length N', () => {
  //   const output = createSpiral(3);
  //   expect(output.length).toEqual(3);
  // });
});
