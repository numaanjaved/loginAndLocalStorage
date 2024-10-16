let fromReset = () => {
    form.reset();
    adminAttContainer.style.display = "none";
    admin_heading.style.display = "none";
    imgDisplay.src = "./Assets/images/default_profile.png";
    let select = document.getElementById(`select_user`);
    let selectUserHeading = document.getElementById(`choose_user_heading`);
    select.style.display = "flex";
    selectUserHeading.style.display = "block";
};