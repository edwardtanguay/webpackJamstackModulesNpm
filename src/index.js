import './scss/reset.scss';
import './scss/main.scss';
import { DisplayHeader } from './components/DisplayHeader.js';
import { SectionWebTechnology as SectionWebTechnology } from './components/SectionInfo.js';
import { SectionWordSearch as SectionWordSearch } from './components/SectionWordSearch.js';

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
	${SectionWebTechnology({name: "Webpack", created: 2012, included: true})}
	${SectionWebTechnology({name: "Browserify", created: 2010, included: false})}
</div>

${DisplayHeader({supertitle: 'Example of npm package and interactivity', header: 'Word Search'})}
${SectionWordSearch()}
`;

