const {createSpiral, buildArrayOfN} = require('./../../spiral');

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
  test('it should return an array of length the passed integer (n = 3, output array of length 3)', () => {
    const output = createSpiral(3);
    expect(output[0].length).toEqual(3);
  });
  // TODO: Remove this test once createSpiral do its job 😅
  test('it should return an array with length equal to (last item - first item + 1) ', () => {
    const arr = buildArrayOfN([], 1, 3);
    expect(arr.length).toEqual(3);
  });
});
