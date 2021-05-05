// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

async function getUsers() {
	let url = "https://jsonplaceholder.typicode.com/users";

	try {
		let response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}

async function Users() {
	let users = await getUsers();
	let html = "";

	users.forEach((user) => {
		let content = `<div class="box">
                <p>${user.name}</p>
                <p>${user.email}</p>
        </div>`;

		html += content;
	});

	document.body.innerHTML = html;
}

Users();
