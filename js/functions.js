/* Function Declarations */
function myFunction(b, c) {
	let a = b + c;
	return a;
}

/* Function Expressions */
const mySecondFunction = function (b = 13, c = 18) {
	let a = b + c;
	return a;
};

console.log(myFunction(13, 18));
console.log(mySecondFunction(13, 18));

/* Immediately Invoked Function Expression */
(function () {
	let b = 13;
	let c = 18;
	let a = b + c;
	console.log("The sum:", a);
})();
/* Standard Functions */
const redpencilBox = {
	name: "Red Pencil Box",
	color: "red",
	size: 30,
};

const bluepencilBox = {
	name: "Blue Pencil Box",
	color: "blue",
	size: 24,
};

const addPencilBox = (currentPencilBox) => {
	const newSection = document.createElement("section");
	newSection.innerHTML = `
        <h1>Name: ${currentPencilBox.name}</h1>
        <ul>
            <li>Color: ${currentPencilBox.color}</li>
            <li>Size: ${currentPencilBox.size}</li>
        </ul>
    `;
	return newSection;
};

document.body.append(addPencilBox(redpencilBox));
document.body.append(addPencilBox(bluepencilBox));

/* Arrow Function and this keyword */
window.size = 13;

const yellowpencilBox = {
	name: "Yellow Pencil Box",
	color: "blue",
	size: 24,
	newSize: function (size) {
		console.log(this.size);
		this.size = size;
		console.log(this.size);
		(() => {
			console.log(this.size);
		})();
	},
};

console.log(yellowpencilBox.newSize(5));

/* Callback functions */
function resultCalculator(result) {
	document.querySelector("body").innerHTML = result;
}

function calculation(a, b, callback) {
	let sum = a + b;
	callback(sum);
}

calculation(5, 8, resultCalculator);
