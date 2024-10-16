//Form Image display function

let imgInput = createNewElement(["input", null, ".image_input", null,
    {
        type: "file",
        name: "image",
        accept: "image/png,image/webp, image/jpeg, image/jpg",
        id: "imageUpload",
    }]);

let imgDisplay = document.querySelector("#form_img");
imgInput.addEventListener("change", () => {
    let file = imgInput.files[0];
    if (file) {
        imgDisplay.src = URL.createObjectURL(file);
        image_error_msg.style.display = "none";
    }
});
// Image information msg
let imgUploadBtn = document.querySelector(".choose_img_label");
let imgInfoMsg = document.querySelector("#img_info");
imgUploadBtn.addEventListener("mouseenter", () => {
    imgInfoMsg.style.opacity = 1;
});
imgUploadBtn.addEventListener("mouseleave", () => {
    imgInfoMsg.style.opacity = 0;
});