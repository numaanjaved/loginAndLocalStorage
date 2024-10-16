let inputSection = createNewElement(["section", "data_input_section", ".main"]);
let form = createNewElement(["form", "data_form", ".data_input_section", null, { novalidate: "novalidate" }]);
let formProfilePicContainer = createNewElement(["div", "form_profile_picture_container", form]);
let imgInputContainer = createNewElement(["div", "image_input", formProfilePicContainer]);
createNewElement(["span", null, imgInputContainer, `Please upload an image with a 1:1 aspect ratio`, { id: "img_info" }]);
createNewElement(["label", "choose_img_label", imgInputContainer, `Upload Profile Picture`, { for: "imageUpload" }]);
createNewElement(["span", null, imgInputContainer, null, { id: "img_error" }]);
let profilePictureDisplayContainer = createNewElement(["div", "profile_picture_display_container", formProfilePicContainer]);
createNewElement(["img", null, profilePictureDisplayContainer, null, {
  src: "./Assets/images/default_profile.png",
  alt: "Default profile Picture",
  id: "form_img",
}]);