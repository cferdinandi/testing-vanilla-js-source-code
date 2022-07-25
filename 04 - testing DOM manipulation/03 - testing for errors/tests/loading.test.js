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

	test('loading message is displayed in the UI', function () {
		loading();
		expect(elem.textContent).not.toHaveLength(0);
	});

	test('custom message is used if provided', function () {
		loading('Loading your character');
		expect(elem.textContent).toBe('Loading your character');
	});

	test('no error is thrown if the [data-loading] element is missing', function () {
		elem.remove();
		expect(function () {
			loading();
		}).not.toThrow();
	});

});