const fizzbuzz = require('./../../fizzbuzz');

describe('Fizzbuzz tested with Jest', () => {
  test('it should return hello', () => {
    expect(fizzbuzz()).toBe('Hello!');
  });
});
