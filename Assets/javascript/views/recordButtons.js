let feedUpdateForm = (selectedRecord) => {
	let LS = JSON.parse(localStorage.getItem('DataArray'));
	userFirstName.value = LS[selectedRecord].FirstName;
	userLastName.value = LS[selectedRecord].LastName;
	userEmail.value = LS[selectedRecord].Email;
	userContactNumber.value = LS[selectedRecord].Contact;
	userAddress.value = LS[selectedRecord].Address;
	userBio.value = LS[selectedRecord].Bio;
	imgDisplay.src = LS[selectedRecord].userPicture;
	updateAdmin(selectedRecord);
};
let updateAdmin = (admin) => {
	let LS = JSON.parse(localStorage.getItem('DataArray'));
	if (LS[admin].userType === "Admin") {
		let adminOption = document.getElementById(`admin_option`);
		adminOption.setAttribute("selected", "selected");
		adminAttContainer.style.display = "flex";
		admin_heading.style.display = "block";
		userName.value = LS[admin].adminName;
		userPassword.value = LS[admin].password;
	}
};
let hideOptions = () => {
	let select = document.getElementById(`select_user`);
	let selectUserHeading = document.getElementById(`choose_user_heading`);
	select.style.display = "none";
	selectUserHeading.style.display = "none";
};
let readProfile = (id) => {
	let records = document.querySelectorAll(`.individual_user_data`);
	records.forEach((record) => { record.style.filter = "blur(3px)"; });
	let LS = JSON.parse(localStorage.getItem('DataArray'));
	let activeProfile = LS.find((user) => user.UserID === id)
	let activeProfileID = activeProfile.UserID;
	let user = new User()
	let userObj = user.read(activeProfileID);
	modal([
		`${userObj.userPicture}`,
		`${userObj.FirstName} ${userObj.LastName}`,
		`${userObj.Email}`,
		`${userObj.Contact}`,
		`${userObj.Address}`,
		`${userObj.Bio}`,
		`${userObj.UserID}`]);
	let modal_container = document.getElementById(userObj.UserID)
	modal_container.style.display = "block";
	usersDataMainContainer.style.minHeight = "800px";
};
let delProfile = (id) => {
	let LS = JSON.parse(localStorage.getItem('DataArray'));
	let activeProfile = LS.find((user) => user.UserID === id)
	let activeProfileID = activeProfile.UserID;
	let user = new User()
	user.delete(activeProfileID);
};
let updateProfile = (id) => {
	hideOptions();
	window.scrollTo(200, 0);
	let LS = JSON.parse(localStorage.getItem('DataArray'));
	let activeProfile = LS.find((user) => user.UserID === id)
	let activeProfileIndex = LS.findIndex((user) => user.UserID === id)
	let activeProfileID = activeProfile.UserID;
	userIndexCheck = activeProfileIndex;
	feedUpdateForm(userIndexCheck);
};

let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
	profileReadBtn.addEventListener("click", e => readProfile(id));
	profileDelBtn.addEventListener("click", e => delProfile(id));
	profileUpdateBtn.addEventListener("click", e => updateProfile(id));
};