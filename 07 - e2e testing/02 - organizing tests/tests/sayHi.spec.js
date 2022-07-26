import {test, expect} from '@playwright/test';

test.describe('The app homepage', function () {

	test('"Say Hi!" form greets user', async function ({page}) {

		// Open the app
		await page.goto('http://localhost:8000/');

		// Enter a name
		await page.fill('#fname', 'Merlin');

		// Submit the form
		await page.click('button');

		// Test expectations
		await expect(page.locator('#greeting')).toContainText('Merlin');
		await expect(page.locator('#fname')).toBeEmpty();

	});

});