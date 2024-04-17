const boolToString = require('./booleanToString')

describe('test BoolToWord function', () => {
    test('basic test for True', () => {
        expect(boolToString(true)).toBe("Sim");
    })
    test('basic test for False', () => {
        expect(boolToString(false)).toBe("Não");
    })
    test('returns a string', () => {
        expect(typeof boolToString(true)).toBe('string');
      });
      test('returns a string', () => {
        expect(typeof boolToString(false)).toBe('string');
      });
})