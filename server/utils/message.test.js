var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Kevin';
    var text = 'Hello there!';
    var res = generateMessage(from,text);
    expect(res.from).toMatch(from);
    expect(res.text).toMatch(text);
    expect(typeof res.createdAt).toBe('number');
  });
});
