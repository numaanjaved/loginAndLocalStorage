let loadScript = async (src, scriptName, scriptLoadingTime) => {
    let scriptsArray = [];
    scriptsArray.push(scriptName);
    let head = document.getElementsByTagName("head")[0];
    let returnScripts = [];

    for (let i = 0; i < scriptsArray.length; i++) {
        let scriptPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let newScript = createNewElement(["script", null, head, null, { src: `${src}`, defer: true }]);
                newScript.onload = () => {
                    resolve(`"${scriptName}" Script Loaded Successfully`);
                };
                newScript.onerror = () => {
                    reject(`Error Occurred while Loading "${scriptName}" Script`);
                };
            }, scriptLoadingTime);
        });
        returnScripts.push(await scriptPromise);
    }
    return returnScripts;
};

let runScript = async (src, scriptName, time) => {
    let scriptsArray = [];
    scriptsArray.push(loadScript(src, scriptName, time));
    for (let i = 0; i < scriptsArray.length; i++) {
        await scriptsArray[i].then((value) => {
            value.forEach((val) => console.log(val));
        }).catch((err) => {
            console.error(err);
        });
    }
};