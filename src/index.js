import './scss/reset.scss';
import './scss/main.scss';
import { DisplayHeader } from './components/DisplayHeader.js';
import { SectionWebTechnology } from './components/SectionWebTechnology.js';
import { SectionWordSearch } from './components/SectionWordSearch.js';
import { SectionUsers } from './components/SectionUsers.js';

document.querySelector('title').innerHTML = 'Basic Webpack Site';

document.querySelector('.app').innerHTML = `
<div class="section">
	${DisplayHeader({ supertitle: 'Example of reading a JSON file', header: 'Users' })}
	${SectionUsers()}
</div>

<div class="section">
	${DisplayHeader({ supertitle: 'Example of custom components and npm package', header: 'Web Technology' })}
	${SectionWebTechnology({ name: "Webpack", created: 2012, included: true })}
	${SectionWebTechnology({ name: "Browserify", created: 2010, included: false })}
</div>

<div class="section">
	${DisplayHeader({ supertitle: 'Example of npm package and interactivity', header: 'Word Search' })}
	${SectionWordSearch()}
</div>
`;

