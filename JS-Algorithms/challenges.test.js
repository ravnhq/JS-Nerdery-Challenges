const { readableTime } = require('./challenges');

describe('Readable Time', () => {
	test('3690 seconds returns 01:01:30', () => {
		expect(readableTime(3690)).toBe('01:01:30');
	});
});
