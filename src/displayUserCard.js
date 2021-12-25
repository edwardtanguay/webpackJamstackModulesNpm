const displayUserCard = ({ id, username, fullName: { firstName: fname, lastName: lname = '<span class="missing">(none)</span>' }, rights: { canSaveFiles: saveRights } }) => {
	return `
		<div class="label">ID:</div>
		<div class="data">${id}</div>
		<div class="label">Username:</div>
		<div class="data">${username}</div>
		<div class="label">First Name:</div>
		<div class="data">${fname}</div>
		<div class="label">Last Name:</div>
		<div class="data">${lname}</div>
		<div class="label">Can save files?</div>
		<div class="data">${saveRights ? "yes" : "no"}</div>
	`;
}
export default displayUserCard;