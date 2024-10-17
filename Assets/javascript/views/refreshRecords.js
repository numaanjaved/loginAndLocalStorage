let refreshRecords = () => {
	usersDataMainContainer.innerHTML = ``;
	let dataArr = (JSON.parse(localStorage.getItem('DataArray')));
	dataArr.forEach(profile => {
		recordRow(
			`${profile.userPicture}`,
			`${profile.UserID}`,
			`${profile.FirstName} ${profile.LastName}`,
			`${profile.userType}`);
	});
};