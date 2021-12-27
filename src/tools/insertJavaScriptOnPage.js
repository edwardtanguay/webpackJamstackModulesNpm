export const insertJavaScriptOnPage = (scriptBlock) => {
	const scriptElement = document.createElement('script');
	scriptElement.type = 'text/javascript';
	scriptElement.innerText = scriptBlock;
	document.head.appendChild(scriptElement);
}