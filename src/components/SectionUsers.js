import users from '../data/users.json';

export const SectionUsers = () => {
	return `
	<div class="sectionUsers">
		<ul class="users">
		${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '</li>').join('')}
		</ul>
	</div>
	`;
}