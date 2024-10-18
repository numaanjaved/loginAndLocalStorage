// console.log(document.cookie);





let getCookie = (cookieName) => {
    let cookieString = `${cookieName}=`;
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookiesArray = decodedCookies.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieString) === 0) {
            return cookie.substring(cookieString.length, cookie.length);
        }
    }
    return "";
};

window.addEventListener('load', () => {
    console.log(`hi`);
    // setTimeout(() => {
    let loggedInUser = getCookie("userLoggedIn");
    if (loggedInUser !== "") {
        console.log(`User available`);
    } else {
        window.location.href = "/login.html";
        console.log(`No user Found`);
    }
    // }, 10);
});


// console.log(getCookie("userLoggedIn"));


// if (document.cookie.includes("userLoggedIn")) {
//     window.location.href = "/index.html";
// } else {
//     window.location.href = "/login.html"
// }
