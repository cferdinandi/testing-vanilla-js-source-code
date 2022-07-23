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

	// Wipe the DOM after each test
	// This isn't necessary since the Element.innerHTML property wipes the DOM already
	// afterEach(function () {
	// 	document.body.innerHTML = '';
	// });

	test('loading message is displayed in the UI', function () {
		loading();
		expect(elem.textContent).not.toHaveLength(0);
	});

	test('custom message is used if provided', function () {
		loading('Loading your character');
		expect(elem.textContent).toBe('Loading your character');
	});

	test('does not throw an error if no element is found', function () {
		elem.remove();
		expect(function () {
			loading();
		}).not.toThrowError();
	});

});