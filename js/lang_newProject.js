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
        document.getElementById("catLocalStorage").setAttribute("name", "로컬 저장소");
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
        document.getElementById("catLocalStorage").setAttribute("name", "localStorage");
    }
}

// 마우스 올리면 노란 박스에 블록 설명 나오는거의 언어별로 설명
const TOOLTIP = {
ko: {
    mint_wait: "기다리기 블록\n\n지정한 시간만큼 프로그램을 멈춥니다",
    mint_sha256: "SHA256 암호화\n\n텍스트를 안전한 해시값으로 변환합니다",
    mint_print: "출력 블록\n\n값을 콘솔에 로그합니다",
    mint_trim: "문자열 자르기 블록\n\n문자열의 앞뒤 공백을 제거합니다",
    mint_urlcodec: "URL을 인코딩하거나 디코딩합니다",
    mint_copy: "클립보드에 복사합니다",

    localstorage_set: "로컬저장소에 키와 value를 저장합니다",
    localstorage_get: '로컬저장소에서 키에 해당하는 값을 가져옵니다',
    localstorage_remove: '로컬저장소에서 키에 해당하는 데이터를 삭제합니다',
    localstorage_clear: '로컬저장소의 모든 데이터를 삭제합니다',
    localstorage_length: '로컬저장소에 저장된 데이터의 개수를 반환합니다',
    localstorage_index: '로컬저장소의 인덱스 번째 데이터를 반환합니다.',
    localstorage_is_have: '로컬저장소에 해당 키가 존재하는지 여부를 반환합니다.',
    mint_ip: '사용자의 IP 주소를 반환합니다.',
},
en: {
    mint_wait: "Wait block\n\nPause the program for the given time",
    mint_sha256: "SHA256 block\n\nConvert text into a secure hash",
    mint_print: "Print block\n\nDisplay text on the console",
    mint_trim: "Trim block\n\nRemove leading and trailing whitespace from a string",
    mint_urlcodec: "URL Codec block\n\nEncode or decode a URL",
    mint_copy: "Copy block\n\nCopy text to the clipboard",
    mint_ip: "IP block\n\nReturn the user's IP address",

    localstorage_set: "Save key and value in localStorage",
    localstorage_get: 'Get value from localStorage by key',
    localstorage_remove: 'Remove data from localStorage by key',
    localstorage_clear: 'Clear all data in localStorage',
    localstorage_length: 'Return the number of items in localStorage',
    localstorage_index: 'Return the data at the given index in localStorage',
    localstorage_is_have: 'Return whether the given key exists in localStorage',
}};

// 블록 안에 들어가는 텍스트를 언어별로 정의
const APPENDFIELD = {
ko: {
    mint_wait: "기다리기",
    mint_wait_set1: "초",

    mint_sha256: "SHA256",
    mint_print: "출력 블록",
    mint_trim: "문자열 양 끝 공백 제거",
    mint_urlcodec: "URL",
    mint_copy: "복사하기",
    mint_ip: "IP 주소",

    localstorage_set_1: "로컬 저장소 키",
    localstorage_set_2: "값",
    localstorage_set_3: "저장하기",
    localstorage_get: '로컬 저장소에서 가져오기',
    localstorage_remove: '로컬 저장소에서 삭제',
    localstorage_clear: '로컬 저장소 모두 삭제',
    localstorage_length: '로컬 저장소 아이템 수',
    localstorage_index: '로컬 저장소',
    localstorage_index_1: '번째 아이템',
    localstorage_is_have: '로컬 저장소에',
    localstorage_is_have_1: '키가 존재하는가?',
},
en: {
    mint_wait: "Wait for",
    mint_wait_set1: "seconds",

    mint_sha256: "SHA256",
    mint_print: "console.log",
    mint_trim: "Trim whitespace",
    mint_urlcodec: "URL",
    mint_copy: "Copy to clipboard",
    mint_ip: "IP Address",

    localstorage_set_1: "LocalStorage key",
    localstorage_set_2: "value",
    localstorage_set_3: "store",
    localstorage_get: 'Get from localStorage',
    localstorage_remove: 'Remove from localStorage',
    localstorage_clear: 'Clear localStorage',
    localstorage_length: 'length of items in localStorage',
    localstorage_index: 'localStorage',
    localstorage_index_1: 'item at index',
    localstorage_is_have: 'Does localStorage have',
    localstorage_is_have_1: 'key?',
}};

// 드롭다운에 표시될 항목을 언어별로 정의
const DROPDOWN = {
ko: {
    encode: "인코드",
    decode: "디코드",
},
en: {
    encode: "Encode",
    decode: "Decode",
}};
