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
        document.getElementById("catMint").setAttribute("name", "민트");
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
        document.getElementById("catMint").setAttribute("name", "Mint");
    }
}

// 마우스 올리면 노란 박스에 블록 설명 나오는거의 언어별로 설명
const TOOLTIP = {
ko: {
    mint_wait:
    "기다리기 블록\n\n지정한 시간만큼\n프로그램을 멈춥니다",

    mint_sha256:
    "SHA256 암호화\n\n텍스트를 안전한 해시값으로 변환합니다",

    mint_print:
    "출력 블록\n\n값을 화면에 표시합니다",

    mint_trim:
    "문자열 자르기 블록\n\n문자열의 앞뒤 공백을 제거합니다"
},
en: {
    mint_wait:
    "Wait block\n\nPause the program for the given time",

    mint_sha256:
    "SHA256 block\n\nConvert text into a secure hash",

    mint_print:
    "Print block\n\nDisplay text on the screen",

    mint_trim:
    "Trim block\n\nRemove leading and trailing whitespace from a string"
}};

// 블록 안에 들어가는 텍스트를 언어별로 정의
const APPENDFIELD = {
ko: {
    mint_wait:
    "기다리기",

    mint_sha256:
    "SHA256",

    mint_print:
    "출력 블록",

    mint_trim:
    "문자열 양 끝 공백 제거"
},
en: {
    mint_wait:
    "Wait for",

    mint_sha256:
    "SHA256",

    mint_print:
    "console.log",

    mint_trim:
    "Trim whitespace"
}};

// dummy input 뒤에 붙을 텍스트를 언어별로 정의
const DUMMYINPUT_APPENDFILED = {
ko: {
    mint_wait:
    "초",
},
en: {
    mint_wait:
    "seconds",
}};
