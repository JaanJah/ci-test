function double(num) {
	if (isNaN(num)) {
		throw new Error(`'${num}' is not number!`);
	}
	var num2 = num + num;
	console.log("nr", num, num2);
	return num2;
}
module.exports = double;
