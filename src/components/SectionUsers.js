import localUsers from '../data/users.json';
import axios from 'axios';

const apiUrl = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json';

export const SectionUsers = async () => {
	const response = await axios.get(apiUrl).catch(err => {
		console.log(`Error fetching users: ${err}`);
	});
	if (response) {
		const apiUsers = response.data.map(user => {
			user.origin = 'external API';
			return user;
		});

		const users = localUsers.concat(apiUsers);
		return `
	<div class="sectionUsers">
		<ul class="users">
		${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '<span class="origin"> (' + user.origin + ')</span></li>').join('')}
		</ul>
	</div>
	`;
	}
}