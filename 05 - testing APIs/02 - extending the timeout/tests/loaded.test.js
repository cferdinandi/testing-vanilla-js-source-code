/**
 * @jest-environment jsdom
 */

import {loaded} from '../loading.js';
import {jest} from "@jest/globals";

// Increase default test timeout
jest.setTimeout(7500);

describe('The loaded() method', function () {

	// Generate HTML before each test
	let elem;
	beforeEach(function () {
		document.body.innerHTML = '<div data-loading aria-live="polite">Loading...</div>';
		elem = document.querySelector('[data-loading]');
	});

	test('content loaded message displayed in the UI', function () {
		loaded();
		expect(elem.textContent).not.toBe('Loading...');
	});

	test('custom message is used if provided', function () {
		loaded('Character loaded');
		expect(elem.textContent).toBe('Character loaded');
	});

	test('no error is thrown if the [data-loading] element is missing', function () {
		elem.remove();
		expect(function () {
			loaded();
		}).not.toThrow();
	});

	test('message is removed after a few seconds', function (done) {
		loaded();
		setTimeout(function () {
			expect(elem.textContent).toHaveLength(0);
			done();
		}, 7000);
	});

});