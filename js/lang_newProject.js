const params = new URLSearchParams(window.location.search);

let lang = params.get("lang") || "ko";

if (lang !== "ko" && lang !== "en") {
    lang = "ko";
}

const script = document.createElement("script");

script.src = "https://unpkg.com/blockly/msg/" + lang + ".js";

script.onload = function () {
    initBlockly();
    applyUILanguage();
    workspace.updateToolbox(document.getElementById("toolbox"));
};

document.head.appendChild(script);

function applyUILanguage() {
    if (lang === "ko") {
        document.getElementById("projectName").placeholder = "프로젝트 이름 입력";
        document.getElementById("runButton").textContent = "실행";
        document.getElementById("catBasic").setAttribute("name", "기본");
        document.getElementById("catLoop").setAttribute("name", "반복");
        document.getElementById("catLogic").setAttribute("name", "논리");
        document.getElementById("catMath").setAttribute("name", "수학");
        document.getElementById("catText").setAttribute("name", "텍스트");
        document.getElementById("catList").setAttribute("name", "리스트");
        document.getElementById("catVar").setAttribute("name", "변수");
        document.getElementById("catFunc").setAttribute("name", "함수");
        document.getElementById("catAdvanced").setAttribute("name", "고급 제어");
        document.getElementById("catColour").setAttribute("name", "색상");
    } else {
        document.getElementById("projectName").placeholder = "Enter project name";
        document.getElementById("runButton").textContent = "Run";
        document.getElementById("catBasic").setAttribute("name", "Basic");
        document.getElementById("catLoop").setAttribute("name", "Loops");
        document.getElementById("catLogic").setAttribute("name", "Logic");
        document.getElementById("catMath").setAttribute("name", "Math");
        document.getElementById("catText").setAttribute("name", "Text");
        document.getElementById("catList").setAttribute("name", "Lists");
        document.getElementById("catVar").setAttribute("name", "Variables");
        document.getElementById("catFunc").setAttribute("name", "Functions");
        document.getElementById("catAdvanced").setAttribute("name", "Advanced");
        document.getElementById("catColour").setAttribute("name", "Colour");
    }
}
