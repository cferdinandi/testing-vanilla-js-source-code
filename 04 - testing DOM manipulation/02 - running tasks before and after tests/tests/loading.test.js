/**
 * @jest-environment jsdom
 */

import {loading} from '../loading.js';

describe('The loading() method', function () {

	// Generate HTML before each test
	let elem;
	beforeEach(function () {
		document.body.innerHTML = '<div data-loading aria-live="polite"></div>';
		elem = document.querySelector('[data-loading]');
	});

	// // Wipe the DOM after each test
	// This isn't necessary since the Element.innerHTML property wipes the DOM already
	// afterEach(function () {
	// 	document.body.innerHTML = '';
	// });

	// // Run a task before any tests
	// // This is not needed in our tests here
	// beforeAll(function () {
	// 	return somePromise();
	// });

	// // Run a task after all tests
	// // This is not needed in our tests here
	// afterAll(function () {
	// 	return somePromise();
	// });

	test('loading message is displayed in the UI', function () {
		loading();
		expect(elem.textContent).not.toHaveLength(0);
	});

	test('custom message is used if provided', function () {
		loading('Loading your character');
		expect(elem.textContent).toBe('Loading your character');
	});

});