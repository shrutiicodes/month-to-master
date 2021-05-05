const pencilbox = {
	name: "A Pencil Box",
	size: 30,
	color: "red",
	zipLength: {
		left: 12,
		right: 12,
		top: 24,
	},
	zipOpen: false,
	toggleZip: function (zipStatus) {
		this.zipOpen = zipStatus;
	},
};

console.log(pencilbox);

console.log(pencilbox.color);
console.log(pencilbox.zipLength.left);

var sizeValue = "size";
console.log(pencilbox[sizeValue]);

console.log(pencilbox.toggleZip(true));
