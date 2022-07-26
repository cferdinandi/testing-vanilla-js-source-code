import {test, expect} from '@playwright/test';

test.describe('The app homepage', function () {

	// Open the app before each test
	test.beforeEach(async function () {
		await page.goto('http://localhost:8000/');
	});

	test('"Say Hi!" form greets user', async function ({page}) {

		// Enter a name
		await page.fill('#fname', 'Merlin');

		// Submit the form
		await page.click('button');

		// Test expectations
		await expect(page.locator('#greeting')).toContainText('Merlin');
		await expect(page.locator('#fname')).toBeEmpty();

		// Wait 3.5 seconds
		await page.waitForTimeout(3500);

		// Test more expectations
		await expect(page.locator('#greeting')).toBeEmpty();

	});

});