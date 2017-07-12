console.log("main2.js");

let splitValues = function(value) {
	let arrayOfNumbers = value.split("");
	// For Loop
for (let i = 0; i < splitIntoArray.length; i++) {
	splitIntoArray[i] = Number(splitIntoArray[i]);
	}
	return arrayOfNumbers;
}
console.log("splitValues", ("19"));

function squareAndAdd(passedValue){
	let processedVal = [];

	let i =0;
	while (i < passedValue.length) {
		let squared = passedValue[i] * passedValue[i];
		processedVal.push(squared);
		i++;
	}

let allTogether = 0;
for (let i =0; i < processedVals.length; i++) {
		allTogether = allTogether + processedVals[i];
}
return allTogether;

}

function checkHappy(passedValue){
	if (passedValue === 1 || passedValue === 7){
		console.log(testThisNumber, "is a happy number!");
	}else{
		let checkDigits = passedValue.toString();
		if(checkDigits.length === 1){
			// sad number
			console.log("testThisNumber", "is a sad number");
		}else {
			//keep going
			checkDigits = splitValues(checkDigits);
			let newNumber = squareAndAdd(checkDigits);
			checkDigits(newNumber);
		}
	}
}

let button = document.getElementById("btn-checkvalue");
let testThisNumber;

button.addEventListener("click", function(){
	testThisNumber = document.getElementById("numberVal").value;
	let testThis = splitValues(testThisNumber);
	testThis = squareAndAdd(testThis);
	testThis = checkHappy(testThis);
});








