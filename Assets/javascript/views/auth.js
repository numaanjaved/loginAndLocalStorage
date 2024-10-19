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

// both methods are working:
if (document.cookie.includes("userLoggedIn")) {
    console.log(`User available`);
} else {
    window.location.href = "/login.html";
    console.log(`No user Found`);
}
// window.addEventListener('load', () => {
//     let loggedInUser = getCookie("userLoggedIn");
//     if (loggedInUser !== "") {
//         console.log(`User available`);
//     } else {
//         window.location.href = "/login.html";
//         console.log(`No user Found`);
//     }
// });