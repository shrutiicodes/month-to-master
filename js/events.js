const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
	button.classList.toggle("active");
	console.log("Button is clicked");
});

container.addEventListener("mouseenter", () => {
	container.classList.add("purple");
});

container.addEventListener("mouseleave", () => {
	container.classList.remove("purple");
});
