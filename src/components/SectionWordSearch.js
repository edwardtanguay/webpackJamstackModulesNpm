import words from 'an-array-of-english-words';
import { insertJavaScriptOnPage } from '../tools/insertJavaScriptOnPage.js';

insertJavaScriptOnPage(`
function searchWords() {
	const searchTextElem = document.querySelector('.searchText');
	const resultsElem = document.querySelector('.results');
	const searchText = searchTextElem.value;
	const totalElem = document.querySelector('.total');
	if(searchText === '') {
		resultsElem.style.display = 'none';
		resultsElem.innerHTML = '';
		totalElem.innerHTML = '';
	} else {
		const words = [${words.map(word => "'" + word + "'").join(',')}];
		const foundWords = words.filter(word => {
			if(word.toLowerCase().includes(searchText.toLowerCase())) {
				return word;
			}
		});
		resultsElem.style.display = 'block';
		resultsElem.innerHTML = foundWords.join(', ');
		totalElem.innerHTML = foundWords.length + ' words found';
	}
}
`);

export const SectionWordSearch = () => {
	return `
	<div class="sectionWordSearch">
		<img class="searchIcon" src="images/search.png"/>
		<div>Search: <input class="searchText" type="text" onkeyup="searchWords()" /> <span class="total"></span> </div>	
		<div class="results" style="display:none"></div>
	</div>
	`;
}