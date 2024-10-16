let loginForm = document.querySelector(`.login_form`);
let adminAcc = new Admin();
adminAcc.setAdminName(`ahmed_tahiri`);
adminAcc.setPassword(`Ahmed123`);
adminAcc.setFirstName("Ahmed");
adminAcc.setLastName("Tahiri");
adminAcc.setEmail("ahmedtahri@gmail.com");
adminAcc.setContactNum("03335910691");
adminAcc.setAddress("Jail Road Lahore");
adminAcc.setBio("I'm Professional Web developer");
adminAcc.setProfilePic("./Assets/images/default_profile.png");
adminAcc.setUserType("Admin");
adminAcc.setID();
usersDataArray.push(adminAcc);

let loginFromReset = () => {
    loginForm.reset();
};
let loginValidation = () => {
    let validationCheck = true;
    if (!adminAcc.CheckValidation(loginUserName, loginUserPassword)) { validationCheck = false };
    if (validationCheck) {
        loginSuccessful();
    }
    loginFromReset();
}
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginValidation();
});