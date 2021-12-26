import users from '../data/users.json';
import axios from 'axios';

const apiUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

(async () => {
	const response = await fetch(apiUrl);
	if (response.ok) {
		const users = await response.json();
		users.forEach(user => {
			// console.log(user.firstName);
		})
	} else {
		console.log(response);
	}
})();


(async () => {
	axios.get(apiUrl)
		.then(response => {
			const users = response.data;
			users.forEach(user => {
				console.log(user.firstName);
			})
		})
		.catch(error => {
			console.log(error);
		});
})();

export const SectionUsers = () => {
	return `
	<div class="sectionUsers">
		<ul class="users">
		${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '</li>').join('')}
		</ul>
	</div>
	`;
}