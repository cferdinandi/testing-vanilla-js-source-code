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


export {loading};