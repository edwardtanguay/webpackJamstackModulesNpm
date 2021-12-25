export const displayInfo = ({ name, created, included }) => {
	return `
	<div class="displayInfo">
		<div class="infoRow">
			<div class="label">Name:</div>
			<div class="data">${name}</div>
		</div>
		<div class="infoRow">
			<div class="label">Created:</div>
			<div class="data">${created} (following created ${created+1})</div>
		</div>
		<div class="infoRow">
			<div class="label">Included:</div>
			<div class="data">${included ? 'yes' : 'no'}</div>
		</div>
	</div>
	`;
}