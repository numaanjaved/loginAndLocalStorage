let userIndexCheck = null;
let formValidation = () => {
	let validationCheck = true;
	let userInstance = new User();
	if (!userInstance.setElementValidation(userFirstName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userFirstName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userLastName, /^[a-zA-Z\s]*$/, 30)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userEmail, /^[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/, 100)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userContactNumber, /^[0-9]{2,}[0-9]{7,}$/, 20)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userAddress, /^[a-zA-Z0-9\s,.'-]*$/, 150)) { validationCheck = false; }
	if (!userInstance.setElementValidation(userBio, /^[a-zA-Z0-9,.!?'\s-]*$/, 300)) { validationCheck = false; }
	if (!userInstance.setProfilePicValidation(imgInput)) { validationCheck = false; }

	if (selectUserType.value === "Admin") {
		if (!userInstance.setElementValidation(userName, /^[a-zA-Z0-9_]*$/, 30)) { validationCheck = false; }
		if (!userInstance.setElementValidation(userPassword, /^[a-zA-Z0-9_#@.&]*$/, 30)) { validationCheck = false; }
	}
	let userData = [
		userFirstName.value,
		userLastName.value,
		userEmail.value,
		userContactNumber.value,
		userAddress.value,
		userBio.value,
		URL.createObjectURL(imgInput.files[0])
	];
	if (validationCheck) {
		if (selectUserType.value === "Admin") {
			if (userIndexCheck === null) {
				userData.push(userName.value, userPassword.value);
				userInstance.createNewAdmin(userData);
			} else {
				userData.push(userName.value, userPassword.value);
				userInstance.updateExistingAdmin(userData);
			}
		} else {
			if (userIndexCheck === null) {
				userInstance.createNewUser(userData);
			} else { userInstance.updateExistingUser(userData); }
		}
		fromReset();
	}
	console.log(usersDataArray);
	refreshRecords();
};
charLimitCheck();