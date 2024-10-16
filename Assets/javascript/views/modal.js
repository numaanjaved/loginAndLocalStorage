let modal = (profilePic, userName, userEmail, userContactNum, userAddress, userBio, id = null) => {
  let modalMainContainer = createNewElement(["div", "modal_container", usersDataMainContainer, null, { id: `${id}` }]);
  let modalContentContainer = createNewElement(["div", "modal_content_container", modalMainContainer]);
  let modalPictureContainer = createNewElement(["div", "modal_picture_container", modalContentContainer]);
  let modalPicFigureTag = createNewElement(["figure", "profile_figure_tag", modalPictureContainer]);
  createNewElement(["img", null, modalPicFigureTag, null, { src: `${profilePic}` }]);
  let modalTextContainer = createNewElement(["div", "modal_text_content_container", modalContentContainer]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Profile ID:`]);
  createNewElement(["p", "modal_data", modalTextContainer, `${id}`]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Full Name:`]);
  createNewElement(["p", "modal_data", modalTextContainer, `${userName}`]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Email:`]);
  createNewElement(["p", "modal_data", modalTextContainer, `${userEmail}`]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Contact Number:`]);
  createNewElement(["p", "modal_data", modalTextContainer, `${userContactNum}`]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Address:`]);
  createNewElement(["p", "modal_data", modalTextContainer, `${userAddress}`]);
  createNewElement(["p", "modal_data_headings", modalTextContainer, `Profile Description or Bio:`]);
  createNewElement(["textarea", "modal_data", modalTextContainer, `${userBio}`, { disabled: "disabled" }]);
  let modalCloseBtn = createNewElement(["button", "modal_close_btn", modalContentContainer, `Close`]);
  modalCloseBtn.addEventListener("click", () => {
    let records = document.querySelectorAll(`.individual_user_data`);
    records.forEach((record) => { record.style.filter = "blur(0px)"; });
    modalMainContainer.style.display = "none";
    usersDataMainContainer.style.minHeight = "";
  });
};