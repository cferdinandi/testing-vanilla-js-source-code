/**
 * Show loading indicator
 * @param  {String} msg The "loading" message
 */
function loading (msg = 'Loading...') {

	// Get the loading element
	let elem = document.querySelector('[data-loading]');
	if (!elem) return;

	// Show status message
	elem.textContent = msg;

}

/**
 * Show loaded message, then hide indicator
 * @param  {String}  msg  The "content loaded" message
 * @param  {Integer} hide The amount of milliseconds to wait to remove the message from the UI
 */
function loaded (msg = 'Content loaded') {

	// Get the loading element
	let elem = document.querySelector('[data-loading]');
	if (!elem) return;

	// Show status message
	elem.textContent = msg;

	// Hide message after 5 seconds
	setTimeout(function () {
		elem.textContent = '';
	}, 4000);

}


export {loading, loaded};