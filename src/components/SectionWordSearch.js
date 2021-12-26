import words from 'an-array-of-english-words';

const scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.innerText = `
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
			if(word.includes(searchText)) {
				return word;
			}
		});
		resultsElem.style.display = 'block';
		resultsElem.innerHTML = foundWords.join(', ');
		totalElem.innerHTML = foundWords.length + ' words found';
	}
}
`;
document.head.appendChild(scriptElement);

export const SectionWordSearch = () => {
	return `
	<div class="sectionWordSearch">
		<div>Search: <input class="searchText" type="text" onkeyup="searchWords()" /> <span class="total"></span> </div>	
		<div class="results" style="display:none"></div>
	</div>
	`;
}