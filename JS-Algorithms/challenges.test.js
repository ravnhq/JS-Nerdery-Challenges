/* eslint linebreak-style: ["error", "windows"] */
const {
	readableTime,
	circularArray,
	ownPower,
	digitSum,
	fibIndex,
} = require('./challenges');

describe('Readable Time', () => {
	test('458 seconds returns 00:07:38', () => {
		expect(readableTime(458)).toBe('00:07:38');
	});
	test('3690 seconds returns 01:01:30', () => {
		expect(readableTime(3690)).toBe('01:01:30');
	});
	test('7293 seconds returns 02:01:33', () => {
		expect(readableTime(7293)).toBe('02:01:33');
	});
	test('32420 seconds returns 09:00:20', () => {
		expect(readableTime(32420)).toBe('09:00:20');
	});
});

describe('Circular Array', () => {
	test("The circular array from the 2nd index should return ['Island', 'Japan', 'Israel', 'Germany', 'Norway']", () => {
		expect(circularArray(2)).toEqual(['Island', 'Japan', 'Israel', 'Germany', 'Norway']);
	});
	test("The circular array from the 3rd index should return ['Japan', 'Israel', 'Germany', 'Norway', 'Island']", () => {
		expect(circularArray(3)).toEqual(['Japan', 'Israel', 'Germany', 'Norway', 'Island']);
	});
	test("The circular array from the 5th index should return ['Germany', 'Norway', 'Island', 'Japan', 'Israel']", () => {
		expect(circularArray(5)).toEqual(['Germany', 'Norway', 'Island', 'Japan', 'Israel']);
	});
	test("The circular array from the 9th index should return ['Israel', 'Germany', 'Norway', 'Island', 'Japan']", () => {
		expect(circularArray(9)).toEqual(['Israel', 'Germany', 'Norway', 'Island', 'Japan']);
	});
});

describe('Own Powers', () => {
	test('The last 3 digits from the sum of powers all the way to 10 returns "317"', () => {
		expect(ownPower(10, 3)).toBe('317');
	});
	test('The last 7 digits from the sum of powers all the way to 12 returns "7190184"', () => {
		expect(ownPower(12, 7)).toBe('7190184');
	});
	test('The last 12 digits from the sum of powers all the way to 21 returns "499809480704"', () => {
		expect(ownPower(21, 12)).toBe('499809480704');
	});
});

describe('Sum of Factorial Digits', () => {
	test('The sum of the factorial digits of 10 returns the numbet 27', () => {
		expect(digitSum(10)).toBe(27);
	});
	test('The sum of the factorial digits of 42 returns the numbet 207', () => {
		expect(digitSum(42)).toBe(207);
	});
	test('The sum of the factorial digits of 71 returns the numbet 409', () => {
		expect(digitSum(71)).toBe(409);
	});
	test('The sum of the factorial digits of 89 returns the numbet 606', () => {
		expect(digitSum(89)).toBe(606);
	});
});

describe('N-Digit Fibonacci Number', () => {
	test('The index of the first Fibonacci number to have a length of 3 digits is: 12', () => {
		expect(fibIndex(3)).toBe(12);
	});
	test('The index of the first Fibonacci number to have a length of 5 digits is: 21', () => {
		expect(fibIndex(5)).toBe(21);
	});
	test('The index of the first Fibonacci number to have a length of 12 digits is: 55', () => {
		expect(fibIndex(12)).toBe(55);
	});
	test('The index of the first Fibonacci number to have a length of 15 digits is: 69', () => {
		expect(fibIndex(15)).toBe(69);
	});
});
