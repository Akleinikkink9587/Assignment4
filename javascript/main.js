var userName = "";
var userNameLower = "";

function userNameChange() {
    userName = document.getElementById("userName").value;
    userNameLower = userName.toLowerCase();

    var occurrences = document.getElementsByClassName("userName");

    for (let occurrence of occurrences) {
        occurrence.innerHTML = userName;
    }

    var occurrences = document.getElementsByClassName("userNameLower");

    for (let occurrence of occurrences) {
        occurrence.innerHTML = userNameLower;
    }    
}

function openUrl(url) {
    if (userName != "") {
        window.open(url, '_blank');
    } else {
        alert("Please enter a user name.");
    }
}

function openGitHub(path) {
    var baseGitHubPath = "https://github.com"

    window.open(baseGitHubPath + path, '_blank') ;
}

function openFile(path) {
    var baseFileUrl = "https://github.com/" + userName + "/" + userName + ".github.io/blob/master"

    openUrl(baseFileUrl + path);
}

function openFolder(path) {
    var baseFileUrl = "https://github.com/" + userName + "/" + userName + ".github.io/tree/master"

    openUrl(baseFileUrl + path);
}

function openNetlify() {
    var baseNetlifyPath = "https://app.netlify.com"

    window.open(baseNetlifyPath, '_blank') ;
}

function openNetlifySettingSection(section) {
    var baseNetlifyUrl = "https://app.netlify.com/sites/" + userNameLower;

    openUrl(baseNetlifyUrl + section);
}

function openNetlifyPortfolio(section) {
    var basePortfolioUrl = "https://" + userNameLower + ".netlify.com";

    openUrl(basePortfolioUrl + section);
}