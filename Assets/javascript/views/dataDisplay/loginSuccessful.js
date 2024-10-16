let loginSuccessful = () => {
    let inputContainer = document.querySelector(`.data_input_section`);
    let outputContainer = document.querySelector(`.user_data_section`);
    let loginPage = document.querySelector(`.loginPage_main_container`);
    inputContainer.style.display = "flex";
    outputContainer.style.display = "flex";
    loginPage.style.display = "none";
    refreshRecords();
};