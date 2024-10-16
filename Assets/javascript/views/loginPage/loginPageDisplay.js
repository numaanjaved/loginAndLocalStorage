let loginPageMainContainer = createNewElement(["div", "loginPage_main_container", "main"]);
let loginPageSubContainer = createNewElement(["div", "loginPage_sub_container", loginPageMainContainer]);
createNewElement(["h2", "login_heading", loginPageSubContainer, `Login`]);
createNewElement(["form", "login_form", loginPageSubContainer, null, { "validate": "novalidate" }]);
let userNameAttr = {
    type: "text",
    id: "login_userName",
    name: "login_userName",
    placeholder: "Username",
    spellcheck: "false",
    autocomplete: "off",
}
createNewElement(["span", ["error_msg", "invalid_login_Err"], ".login_form"]);
let loginUserName = createNewElement(["input", "login_input", ".login_form", null, userNameAttr]);
let userPasswordAttr = {
    type: "password",
    id: "login_userPassword",
    name: "login_userPassword",
    placeholder: "Password",
    spellcheck: "false",
    autocomplete: "off",
}
let password_Container = createNewElement(["div", "password_container", ".login_form"]);
let loginUserPassword = createNewElement(["input", "login_input", password_Container, null, userPasswordAttr]);
let passwordBtn = createNewElement(["button", "password_btn", password_Container, `Show`, { id: "passwordBtn" }]);
let loginBtn = createNewElement(["button", "login_btn", ".login_form", `Login`, { type: "submit", id: "login_form_btn" }]);
passwordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (passwordBtn.innerHTML === `Show`) {
        passwordBtn.innerHTML = `Hide`;
        loginUserPassword.setAttribute("type", "text");
    } else {
        passwordBtn.innerHTML = `Show`;
        loginUserPassword.setAttribute("type", "password");
    }
});