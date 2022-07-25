/**
 * @jest-environment jsdom
 */

import {getData} from '../api.js';
import 'whatwg-fetch';
import {jest} from "@jest/globals";


describe('The api() method', function () {

	// Generate HTML before each test
	let elem;
	beforeEach(function () {
		document.body.innerHTML = '<div id="app"></div>';
		elem = document.querySelector('#app');
	});

	// Watch for API calls
	jest.spyOn(window, 'fetch');

	test('the scuttlebutt API was called', async function () {
		await getData();
		expect(window.fetch).toHaveBeenCalledWith('https://vanillajsguides.com/api/scuttlebutt.json');
	});

	test('content is displayed in the UI', async function () {
		await getData();
		expect(elem.innerHTML).not.toHaveLength(0);
	});

});