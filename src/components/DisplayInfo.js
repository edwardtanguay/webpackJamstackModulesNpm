import _ from 'lodash';

const suffix = ':';

const highlight = (text) => {
	return `<span style="color: red">${text}</span>`;
}

export const DisplayInfo = ({ name, created, included }) => {
	return `
	<div class="displayInfo">
		<div class="infoRow">
			<div class="label">Name${suffix}</div>
			<div class="data">${name}</div>
		</div>
		<div class="infoRow">
			<div class="label">Created${suffix}</div>
			<div class="data">${created} (following created ${created+1})</div>
		</div>
		<div class="infoRow">
			<div class="label">Included${suffix}</div>
			<div class="data">${highlight(included ? 'yes' : 'no')}</div>
		</div>
		<div class="infoRow">
			<div class="label">Code${suffix}</div>
			<div class="data">${_.camelCase('web technology ' + name)}</div>
		</div>
	</div>
	`;
}