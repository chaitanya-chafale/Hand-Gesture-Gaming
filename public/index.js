var buildUrl = "Build";
var loaderUrl = buildUrl + "/UnityModel.loader.js";
var config = {
	dataUrl: buildUrl + "/UnityModel.data",
	frameworkUrl: buildUrl + "/UnityModel.framework.js",
	codeUrl: buildUrl + "/UnityModel.wasm",
	streamingAssetsUrl: "StreamingAssets",
	companyName: "DefaultCompany",
	productName: "Low Po",
	productVersion: "0.1",
};

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
    config.devicePixelRatio = 1;
    mobileWarning.style.display = "block";
    setTimeout(() => {
        mobileWarning.style.display = "none";
    }, 5000);
} else {
    canvas.style.width = "960px";
    canvas.style.height = "600px";
}
loadingBar.style.display = "block";

var script = document.createElement("script");
var mygi = null;

script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        mygi = unityInstance;
        loadingBar.style.display = "none";
    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(script);

setInterval(() => {
    if (document.getElementById("insert").innerHTML == "Right") {
        mygi.SendMessage('Character', 'MoveRight');
        document.getElementById("insert").innerHTML = ""
    }
    if (document.getElementById("insert").innerHTML == "Left") {
        mygi.SendMessage('Character', 'MoveLeft');
        document.getElementById("insert").innerHTML = ""
    }
    if (document.getElementById("insert").innerHTML == "Start") {
        mygi.SendMessage('Character', 'MoveForward');
        document.getElementById("insert").innerHTML = ""
    }
    if (document.getElementById("insert").innerHTML == "Stop") {
        mygi.SendMessage('Character', 'Stop');
        document.getElementById("insert").innerHTML = ""
    }
    if (document.getElementById("insert").innerHTML == "Moveup") {
        mygi.SendMessage('Character', 'Jump');
        document.getElementById("insert").innerHTML = ""
    }
    if (document.getElementById("insert").innerHTML == "Movedown") {
        mygi.SendMessage('Character', 'Crouch');
        document.getElementById("insert").innerHTML = ""
    }
}, 100);