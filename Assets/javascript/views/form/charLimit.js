let charLimitCheck = () => {
  userBio.addEventListener("input", () => {
    if (userBio.value.length > 300) {
      bioLimitExceed.innerHTML = `Characters Limit Exceeded`;
      userBio.style.outlineColor = "#a31b1b";
      userBio.style.border = "2px solid #a31b1b";
    } else {
      bioLimitExceed.innerHTML = ``;
      userBio.style.outlineColor = "#90c5cf";
      userBio.style.border = "2px solid #90c5cf";
    }
    bioLimitText.innerHTML = `${userBio.value.length}/300`;
  });
};