let userTypeMainContainer = createNewElement(["div", "user_type_container", textAreaTypeContainer]);
let userTypeSubContainer = createNewElement(["div", "user_type_sub_container", userTypeMainContainer]);
let chooseUserContainer = createNewElement(["div", "choose_user_container", userTypeSubContainer]);
let admin_heading = createNewElement(["h3", "admin_heading", chooseUserContainer, `User Name and password for Admin`]);
let adminAttContainer = createNewElement(["div", "admin_attr_container", chooseUserContainer]);
createNewElement(["label", "admin_label", adminAttContainer, `Username`, { for: "admin_name" }]);
createNewElement(["span", ["error_msg", "user_admin"], adminAttContainer]);
let userName = createNewElement(["input", "admin_input", adminAttContainer, null, {
    type: "text",
    id: "admin_name_input",
    name: "admin_name",
    autocomplete: "off",
    placeholder: "e.g., john_smith",
}]);
createNewElement(["label", "admin_label", adminAttContainer, `Password`, { for: "admin_password" }]);
createNewElement(["span", ["error_msg", "user_admin_password"], adminAttContainer]);
let userPassword = createNewElement(["input", "admin_input", adminAttContainer, null, {
    type: "password",
    id: "admin_password_input",
    name: "admin_password",
    autocomplete: "off",
    placeholder: "Enter password here.....",
}]);