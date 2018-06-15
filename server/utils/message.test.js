var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate location message', () => {
    var from = 'Tester';
    var longitude = '1';
    var latitude = '2';
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe('https://www.google.com/maps?q=2,1');
    expect(typeof res.createdAt).toBe('number');
  });
});
