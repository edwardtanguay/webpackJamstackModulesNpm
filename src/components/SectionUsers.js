import users from '../data/users.json';

export const SectionUsers = () => {
	return `
	<ul class="users">
	${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '</li>').join('')}
	</ul>
	`;
}