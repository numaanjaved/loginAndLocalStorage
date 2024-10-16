let profileDataDisplaySection = createNewElement(["section", "user_data_section", ".main"]);
let profileDisplayMainContainer = createNewElement(["div", "user_data_main_container", profileDataDisplaySection]);
createNewElement(["h1", "user_data_section_heading", profileDisplayMainContainer, `Profiles`]);
let ProfileDisplayContainer = createNewElement(["div", "user_data_display_container", profileDisplayMainContainer]);

let dataHeadingsContainer = createNewElement(["div", "data_headings_container", ProfileDisplayContainer]);
let HeadingTextContainer = createNewElement(["div", "text_container", dataHeadingsContainer]);
let HeadingsArr = ["Picture", "Profile ID", "Full Name", "Profile Type"];
HeadingsArr.forEach((heading) => {
  createNewElement(["h4", "data_heading", HeadingTextContainer, `${heading}`]);
});
let actionContainer = createNewElement(["div", "actions_container", dataHeadingsContainer]);
createNewElement(["h4", "data_heading", actionContainer, `Actions`]);
let individualMainContainer = createNewElement(["div", "individual_user_data_container", ProfileDisplayContainer]);