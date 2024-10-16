let formTextInputContent = createNewElement(["div", "form_input_content", form]);
let formTextContentContainer = createNewElement(["div", "form_text_content_container", formTextInputContent]);
let inputTypeContainer = createNewElement(["div", "type_input_container", formTextContentContainer]);
let inputArrayData = [
  {
    labelHeading: "First Name",
    forAttr: {
      for: "userF_name",
    },
    errorClass: "Fname_error",
    inputAttr: {
      type: "text",
      id: "user_Fname",
      name: "user_Fname",
      autocomplete: "off",
      placeholder: "e.g., John",
    },
  },
  {
    labelHeading: "Last Name",
    forAttr: {
      for: "userL_name",
    },
    errorClass: "Lname_error",
    inputAttr: {
      type: "text",
      id: "user_Lname",
      name: "user_Lname",
      autocomplete: "off",
      placeholder: "e.g., Smith",
    },
  },
  {
    labelHeading: "Email",
    forAttr: {
      for: "user_email",
    },
    errorClass: "email_error",
    inputAttr: {
      type: "text",
      id: "user_email",
      name: "user_email",
      autocomplete: "off",
      placeholder: "e.g., johnsmith@gmail.com",
    },
  },
  {
    labelHeading: "Contact Number",
    forAttr: {
      for: "user_contact",
    },
    errorClass: "contact_error",
    inputAttr: {
      type: "tel",
      id: "user_contact",
      name: "user_contact",
      autocomplete: "off",
      placeholder: "e.g., 921234567891",
    },
  },
  {
    labelHeading: "Address",
    forAttr: {
      for: "user_address",
    },
    errorClass: "address_error",
    inputAttr: {
      type: "text",
      id: "user_address",
      name: "user_address",
      autocomplete: "off",
      placeholder: "e.g., 123 Elm St, Springfield, IL",
    },
  },

];
inputArrayData.forEach((data, index) => {
  createNewElement(["label", "text_form_labels", inputTypeContainer, data.labelHeading, data.forAttr]);
  createNewElement(["span", ["error_msg", `${data.errorClass}`], inputTypeContainer]);
  createNewElement(["input", "user_inputs", inputTypeContainer, null, data.inputAttr]);
});
let textAreaTypeContainer = createNewElement(["div", "type_textArea_container", formTextContentContainer,]);
createNewElement(["label", "text_form_labels", textAreaTypeContainer, `Profile Description`, { for: "user_bio" }]);
createNewElement(["span", ["error_msg", "bio_error"], textAreaTypeContainer]);
textAreaAttributes = {
  id: "user_bio",
  name: "user_bio",
  spellcheck: "false",
  autocomplete: "off",
  placeholder: "Write 250-300 characters.....",
};
createNewElement(["textArea", "user_bio_input", textAreaTypeContainer, null, textAreaAttributes]);
let textAreaInfoMsgContainer = createNewElement(["div", "textArea_Info_msg_container", textAreaTypeContainer]);
createNewElement(["span", "limit_text", textAreaInfoMsgContainer, `0/300`]);
createNewElement(["span", "limit_exceed_text", textAreaInfoMsgContainer]);

createNewElement(["label", "text_form_labels", inputTypeContainer, `Choose User Type`, { for: `select_user`, id: "choose_user_heading" }]);

createNewElement(["span", ["error_msg", "userType_error"], inputTypeContainer]);
let selectUserType = createNewElement(["select", "select_user_type", inputTypeContainer, null,
  { name: "select_user", id: "select_user" }]);
let userBtn = createNewElement(["option", "userOption", selectUserType, `User`, { value: "User", id: "user_option", selected: "selected" }]);
let adminBtn = createNewElement(["option", "userOption", selectUserType, `Admin`, { value: "Admin", id: "admin_option" }]);

selectUserType.addEventListener("change", () => {
  if (selectUserType.value === "User") {
    adminAttContainer.style.display = "none";
    admin_heading.style.display = "none";
  } else if (selectUserType.value === "Admin") {
    adminAttContainer.style.display = "flex";
    admin_heading.style.display = "block";
  }
});