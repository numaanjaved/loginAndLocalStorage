let formBtnContainer = createNewElement(["div", "btns_container", ".form_input_content"]);
let resetBtnAttr = {
  type: "reset",
  id: "reset_btn",
};
let submitBtnAttr = {
  type: "submit",
  id: "submit_btn",
};
createNewElement(["button", "form_btns", formBtnContainer, `Reset`, resetBtnAttr]);
createNewElement(["button", "form_btns", formBtnContainer, `Submit`, submitBtnAttr]);