let imgInput = createNewElement(["input", null, ".image_input", null,
    {
        type: "file",
        name: "image",
        accept: "image/png,image/webp, image/jpeg, image/jpg",
        id: "imageUpload",
    }]);

let imgDisplay = document.querySelector("#form_img");
imgInput.addEventListener("change", (event) => {
    let file = event.target.files[0];
    if (file) {
        image_error_msg.style.display = "none";
        let reader = new FileReader();
        reader.onload = function (e) {
            let imageDataUrl = e.target.result;
            imgDisplay.src = imageDataUrl;
            imgDisplay.style.display = 'block';
        };
        reader.readAsDataURL(file);
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