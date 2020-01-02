const spiral = require('./../../spiral');

describe('Spiral tested with Jest Library', () => {
  test('it should return hello', () => {
    expect(spiral()).toBe('Hello!');
  });
});
