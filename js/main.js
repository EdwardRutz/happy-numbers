console.log("main.js");

// Find Happy Numbers
// see wikipedia

/* 
12 + 
*/


let testThisNumber = "19";
let splitIntoArray = testThisNumber.split("");
console.log("splitIntoArray", splitIntoArray);

// For Loop
for (let i = 0; i < splitIntoArray.length; i++) {
	splitIntoArray[i] = Number(splitIntoArray[i]);
}

console.log("splitIntoArray after:", splitIntoArray);

// While loop
let squaredValues = [];
let i = 0;
while(i < splitIntoArray.length){
	let squard = splitIntoArray[i] * splitIntoArray[i];
	i++;
}

console.log("squared", squaredValues);


// Do While Loop - performs the loop at least one time and then evaluate
let addTogether = squaredValues[0];
i=0;
let total;

do {
	total = addTogether + squaredValues[i];
	i++;
}

while (i < squaredValues.length);

console.log("total", total);
//This part is broken 







