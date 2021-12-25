import './scss/reset.scss';
import './scss/main.scss';
import { displayInfo } from './displayInfo.js';

import users from './data/users.json';

document.querySelector('title').innerHTML = 'Basic Webpack Site';

document.querySelector('.app').innerHTML = `

<div class="exampleSection">
	<div class="supertitle">Example of reading a JSON file</div>
	<h2>Users:</h2>
	<ul class="users">
	${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '</li>').join('')}
	</ul>
</div>

<div class="exampleSection">
	<div class="supertitle">Example of custom components</div>
	<h2>Web Technology:</h2>
	${displayInfo({name: "Webpack", created: 2012, included: true})}
	${displayInfo({name: "Browserify", created: 2010, included: false})}
</div>
`;