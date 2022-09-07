/**
 * Get the starting total
 * @param  {Array} nums The numbers to do math on
 * @return {Number}     The starting total
 */
function getTotal (nums) {

	// Make sure there are numbers
	if (!nums.length) return 0;

	// Get the first number and remove it from the array
	return nums.shift();

}

/**
 * Add two or more numbers together
 * @param {...Number} nums The numbers to add
 */
function add (...nums) {

	// Get the first number and remove it from the array
	let total = getTotal(nums);

	// Loop through each number and do math
	for (let num of nums) {
		total = total + num;
	}

	// Return the total
	return total;

}

/**
 * Subtract two or more numbers from each other
 * @param {...Number} nums The numbers to subtract
 */
function subtract (...nums) {

	// Get the first number and remove it from the array
	let total = getTotal(nums);

	// Loop through each number and do math
	for (let num of nums) {
		total = total - num;
	}

	// Return the total
	return total;

}

/**
 * Multiply two or more numbers
 * @param {...Number} nums The numbers to multiply
 */
function multiply (...nums) {

	// Get the first number and remove it from the array
	let total = getTotal(nums);

	// Loop through each number and do math
	for (let num of nums) {
		total = total * num;
	}

	// Return the total
	return total;

}

/**
 * Divide two or more numbers
 * @param {...Number} nums The numbers to divide
 */
function divide (...nums) {

	// Get the first number and remove it from the array
	let total = getTotal(nums);

	// Loop through each number and do math
	for (let num of nums) {
		total = total / num;
	}

	// Return the total
	return total;

}

// Return public functions
// Because we don't return getTotal(), it can only be used internally
export {add, subtract, multiply, divide};