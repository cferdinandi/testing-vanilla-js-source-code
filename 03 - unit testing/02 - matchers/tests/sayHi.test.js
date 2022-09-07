import {sayHi} from '../index.js';

test('Returns a greeting as a string', function () {

	// should return a string
	expect(typeof sayHi()).toBe('string');

	// should include the provided name
	// expect(sayHi('Merlin').includes('Merlin')).toBe(true);
	expect(sayHi('Merlin')).toContain('Merlin');

	// should have a value when no name is included
	// expect(sayHi()).toBeTruthy();
	expect(sayHi()).not.toHaveLength(0);

});