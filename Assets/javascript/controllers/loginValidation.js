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
adminAcc.setProfilePic("./Assets/images/image2.jpg");
adminAcc.setUserType("Admin");
adminAcc.setID();
localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
let LS = JSON.parse(localStorage.getItem('DataArray'));
let existingAdmin = LS.find(userObj => userObj.userType === "Admin");
if (!existingAdmin) {
    usersDataArray.push(adminAcc);
    localStorage.setItem('DataArray', JSON.stringify(usersDataArray));
}

let userNameValue = document.getElementById("login_userName").value;

let setCookie = (cookieName, cookieValue, expTime) => {
    let expire = new Date();
    expire.setTime(expire.getTime() + (expTime * 60 * 1000));
    let expireTimeUTC = expire.toUTCString();
    let expireTimeLocal = expire.toString();
    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expireTimeUTC};path=/`;
    console.log(`Expiration time in UTC: ${expireTimeUTC}`);
    console.log(`Expiration time in local time: ${expireTimeLocal}`);
};


let getCookie = (cookieName) => {
    let cookieString = `${cookieName}=`;
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookiesArray = decodedCookies.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieString) == 0) {
            return cookie.substring(cookieString.length, cookie.length);
        }

    }
    return "";
};


let loginFromReset = () => {
    loginForm.reset();
};
let loginValidation = () => {
    let validationCheck = true;
    if (!adminAcc.CheckValidation(loginUserName, loginUserPassword)) { validationCheck = false };
    if (validationCheck) {
        let userNameValue = document.getElementById("login_userName").value;
        setCookie("userLoggedIn", userNameValue, 5);
        loginSuccessful();
    }
    loginFromReset();
}
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginValidation();
});


window.onload = () => {
    let loggedInUser = getCookie("userLoggedIn");
    if (loggedInUser !== "") {
        loginSuccessful();
        console.log(`User available`);
    } else {
        console.log(`No user Found`);
    }
};