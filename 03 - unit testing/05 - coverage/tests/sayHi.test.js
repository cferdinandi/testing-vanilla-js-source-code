import {sayHi} from '../index.js';

describe('The sayHi() method', function () {

	test('returns a string', function () {
		expect(typeof sayHi()).toBe('string');
	});

	// test('includes the provided name', function () {
	// 	expect(sayHi('Merlin')).toContain('Merlin');
	// });

	// test('has a value when no name is included', function () {
	// 	expect(sayHi()).not.toHaveLength(0);
	// });

});