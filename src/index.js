import './scss/reset.scss';
import './scss/main.scss';
import { DisplayInfo } from './components/DisplayInfo.js';
import { DisplayHeader } from './components/DisplayHeader.js';
import { WordSearch } from './components/WordSearch.js';

import users from './data/users.json';

document.querySelector('title').innerHTML = 'Basic Webpack Site';


document.querySelector('.app').innerHTML = `

<div class="exampleSection">
${DisplayHeader({ supertitle: 'Example of reading a JSON file', header: 'Users'})}
	<ul class="users">
	${users.map(user => '<li>' + user.lastName + ', ' + user.firstName + '</li>').join('')}
	</ul>
</div>

${DisplayHeader({ supertitle: 'Example of custom components and npm package', header: 'Web Technology'})}
	${DisplayInfo({name: "Webpack", created: 2012, included: true})}
	${DisplayInfo({name: "Browserify", created: 2010, included: false})}
</div>

${DisplayHeader({supertitle: 'Example of npm package and interactivity', header: 'Word Search'})}
${WordSearch()}
`;

