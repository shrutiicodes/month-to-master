class pencilBox {
	constructor(
		name,
		size,
		color,
		zipLengthLeft,
		zipLengthRight,
		zipLengthTop,
		zipOpen,
		datePurchased
	) {
		this.name = name;
		this.size = size;
		this.color = color;
		this.zipLength = {
			left: zipLengthLeft,
			right: zipLengthRight,
			top: zipLengthTop,
		};
		this.zipOpen = zipOpen;
		this.datePurchased = datePurchased;
	}
	toggleZip(zipStatus) {
		this.zipOpen = zipStatus;
	}
	pencilBoxAge() {
		let now = new Date();
		let purchased = new Date(this.datePurchased);
		let time = now - purchased;
		let daysSincePurchased = Math.floor(time / (1000 * 3600 * 24));
		return daysSincePurchased;
	}
}

export default pencilBox;
