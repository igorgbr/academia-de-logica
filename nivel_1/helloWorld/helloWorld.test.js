// helloWorld.test.js
const helloWorld = require('./helloWorld');

describe('helloWorld function', () => {
  test('returns hello world', () => {
    expect(helloWorld("Hello world")).toBe("Hello world, i'm a javascript developer!");
  });

  test('returns a string', () => {
    expect(typeof helloWorld("Hello world")).toBe('string');
  });
});

