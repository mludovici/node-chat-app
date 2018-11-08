var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage' , () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Marc','Hello World');
        expect(message.from).toBe('Marc');
        expect(message.text).toBe('Hello World');
        expect(typeof message.createdAt).toBe('number');

        expect(message).toEqual({
            from: 'Marc',
            text: 'Hello World',
            createdAt: message.createdAt
        });
        // store res in variable
        // assert from match
        // assert text match
        // assert createdAt is number
    });
});