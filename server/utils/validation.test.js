const expect = require('expect');

const {isRealString} = require('./validation');

describe('Testing isRealString validation', () => {
  it('should return correct validation values', () => {
    expect(isRealString(123)).toBeFalsy;
    expect(isRealString('   ')).toBeFalsy;
    expect(isRealString('  hello world   ')).toBeTruthy;
  });
});
