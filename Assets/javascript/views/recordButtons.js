let feedUpdateForm = (selectedRecord) => {
	userFirstName.value = usersDataArray[selectedRecord].getFirstName();
	userLastName.value = usersDataArray[selectedRecord].getLastName();
	userEmail.value = usersDataArray[selectedRecord].getEmail();
	userContactNumber.value = usersDataArray[selectedRecord].getContactNum();
	userAddress.value = usersDataArray[selectedRecord].getAddress();
	userBio.value = usersDataArray[selectedRecord].getBio();
	imgDisplay.src = usersDataArray[selectedRecord].getProfilePic();
	updateAdmin(selectedRecord);
};
let updateAdmin = (admin) => {
	if (usersDataArray[admin].getUserType() === "Admin") {
		let adminOption = document.getElementById(`admin_option`);
		adminOption.setAttribute("selected", "selected");
		adminAttContainer.style.display = "flex";
		admin_heading.style.display = "block";
		userName.value = usersDataArray[admin].getAdminName();
		userPassword.value = usersDataArray[admin].getPassword();
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
let delProfile = (delProfileBtn) => {
	let clickedBtnId = delProfileBtn.parentElement.parentElement.nextSibling.id;
	let user = usersDataArray.find((user) => user.getID() === clickedBtnId);
	if (user) { user.delete(); }
};
let updateProfile = (updateProfileBtn) => {
	hideOptions();
	window.scrollTo(200, 0);
	let clickedBtnId = updateProfileBtn.parentElement.parentElement.nextSibling.id;
	let selectedUser = usersDataArray.findIndex((user) => user.getID() === clickedBtnId);
	userIndexCheck = selectedUser;
	feedUpdateForm(selectedUser);
};

let readUpdateDelete = (userDataContainer, ProfileBtnOpsContainer, id) => {
	let profileReadBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Read`, { id: "read_btn" }]);
	let profileUpdateBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Update`, { id: "update_btn" }]);
	let profileDelBtn = createNewElement(["button", "Ops_Buttons", ProfileBtnOpsContainer, `Delete`, { id: "delete_btn" }]);
	profileReadBtn.addEventListener("click", e => readProfile(id));
	profileDelBtn.addEventListener("click", e => delProfile(profileDelBtn));
	profileUpdateBtn.addEventListener("click", e => updateProfile(profileUpdateBtn));
};