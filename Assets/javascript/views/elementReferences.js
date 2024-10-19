let usersDataMainContainer = document.querySelector(".individual_user_data_container");
let usersDataArray = [];
let userFirstName = document.getElementById("user_Fname");
let userLastName = document.getElementById("user_Lname");
let userEmail = document.getElementById("user_email");
let userContactNumber = document.getElementById("user_contact");
let userAddress = document.getElementById("user_address");
let userBio = document.getElementById("user_bio");
let bioLimitText = document.querySelector(".limit_text");
let bioLimitExceed = document.querySelector(".limit_exceed_text");
let emptyRecord_msg = document.createElement("p");
emptyRecord_msg.classList.add("empty_msg");
usersDataMainContainer.appendChild(emptyRecord_msg);
// Error messages
let FnameErr = document.querySelector(".Fname_error");
let LnameErr = document.querySelector(".Lname_error");
let emailErr = document.querySelector(".email_error");
let contactErr = document.querySelector(".contact_error");
let addressErr = document.querySelector(".address_error");
let bioErr = document.querySelector(".bio_error");
let userTypeErr = document.querySelector(".userType_error");
let userNameErr = document.querySelector(".user_admin");
let userPassErr = document.querySelector(".user_admin_password");
let invalidLoginErr = document.querySelector(".invalid_login_Err");
let image_error_msg = document.getElementById("img_error");
if (usersDataArray.length === 0 || localStorage.length === 0) {
    emptyRecord_msg.style.display = "block";
    emptyRecord_msg.innerHTML = `No Record Found!`;
}