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
        document.getElementById("runButton").textContent = "▶ 실행";
        document.getElementById("saveButton").textContent = "파일로 저장";
        document.getElementById("loadButton").textContent = "파일 불러오기";
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
        document.getElementById("catDate").setAttribute("name", "날짜");
        document.getElementById("catKeyDown").setAttribute("name", "키 입력");
        document.getElementById("catMint").setAttribute("name", "민트");
        document.getElementById("catLocalStorage").setAttribute("name", "로컬 저장소");
    } else {
        document.getElementById("projectName").placeholder = "Enter project name";
        document.getElementById("runButton").textContent = "▶ Run project";
        document.getElementById("saveButton").textContent = "Save to file";
        document.getElementById("loadButton").textContent = "Load file";
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
        document.getElementById("catDate").setAttribute("name", "Date");
        document.getElementById("catKeyDown").setAttribute("name", "Key inputs");
        document.getElementById("catMint").setAttribute("name", "Mint");
        document.getElementById("catLocalStorage").setAttribute("name", "LocalStorage");
    }
}

// 마우스 올리면 노란 박스에 블록 설명 나오는거의 언어별로 설명
const TOOLTIP = {
ko: {
    mint_wait: "기다리기 블록\n\n지정한 시간만큼 프로그램을 멈춥니다",
    mint_sha256: "SHA256 암호화\n\n텍스트를 안전한 해시값으로 변환합니다",
    mint_print: "출력 블록\n\n값을 콘솔에 로그합니다",
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
    mint_toast: '토스트로 원하는 글을 원하는 시간만큼 출력합니다.',

    date_picker: "날짜 선택 블록\n\n날짜를 선택할 수 있는 달력 UI를 표시합니다",
    date_now: "현재 날짜/시간 블록\n\n현재 날짜와 시간을 가져옵니다",
    date_year: "현재 년도 블록\n\n현재 년도를 가져옵니다",
    date_month: "현재 월 블록\n\n현재 월을 가져옵니다. (1~12)",
    date_day: "현재 일 블록\n\n현재 일을 가져옵니다",
    date_hour: "현재 시 블록\n\n현재 시간(시)을 가져옵니다. (0~23)",
    date_minute: "현재 분 블록\n\n현재 분을 가져옵니다. (0~59)",
    date_second: "현재 초 블록\n\n현재 초를 가져옵니다. (0~59)",
    date_week: "현재 요일 블록\n\n현재 요일을 가져옵니다. (예: 월요일, Tuesday)",

    multiline_text: "여러줄 입력 가능한 텍스트 박스",

    keydown: "특정 키가 눌렸는지 확인하고 코드를 실행합니다.",
    keyup: "특정 키가 때졌는지 확인하고 코드를 실행합니다.",
},
en: {
    mint_wait: "Wait block\n\nPause the program for the given time",
    mint_sha256: "SHA256 block\n\nConvert text into a secure hash",
    mint_print: "Print block\n\nDisplay text on the console",
    mint_urlcodec: "URL Codec block\n\nEncode or decode a URL",
    mint_copy: "Copy block\n\nCopy text to the clipboard",
    mint_ip: "IP block\n\nReturn the user's IP address",
    mint_toast: 'Toast block\n\nPrints out the requested \namount of time with toast.',

    localstorage_set: "Save key and value in localStorage",
    localstorage_get: 'Get value from localStorage by key',
    localstorage_remove: 'Remove data from localStorage by key',
    localstorage_clear: 'Clear all data in localStorage',
    localstorage_length: 'Return the number of items in localStorage',
    localstorage_index: 'Return the data at the given index in localStorage',
    localstorage_is_have: 'Return whether the given key exists in localStorage',

    date_picker: "Date Picker block\n\nDisplay a calendar UI to select a date",
    date_now: "Current Date/Time block\n\nGet the current date and time",
    date_year: "Current Year block\n\nGet the current year",
    date_month: "Current Month block\n\nGet the current month (1~12)",
    date_day: "Current Day block\n\nGet the current day",
    date_hour: "Current Hour block\n\nGet the current hour (0~23)",
    date_minute: "Current Minute block\n\nGet the current minute (0~59)",
    date_second: "Current Second block\n\nGet the current second (0~59)",
    date_week: "Current Weekday block\n\nGet the current weekday (e.g. Monday, 화요일)",

    multiline_text: "A letter, word, or line of text",

    keydown: "Key block\n\nDetermines if a specific key\nhas been pressed and executes code.",
    keyup: "Key block\n\nDetermines whether a specific key\nis released and executes code.",
}};

// 블록 안에 들어가는 텍스트를 언어별로 정의
const APPENDFIELD = {
ko: {
    mint_wait: "기다리기",
    mint_wait_set1: "초",

    mint_sha256: "SHA256",
    mint_print: "출력 블록",
    mint_urlcodec: "URL",
    mint_copy: "복사하기",
    mint_ip: "IP 주소",
    mint_toast1: "토스트 출력 내용:",
    mint_toast2: "지속시간:",

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

    date_picker: "날짜:",
    date_now: "현재 날짜/시간",
    date_year: "현재 년도",
    date_month: "현재 월",
    date_day: "현재 일",
    date_hour: "현재 시간",
    date_minute: "현재 분",
    date_second: "현재 초",
    date_week: "현재 요일",

    key1: "키",
    keydown: "가 눌렸는가?",
    keyup: "가 뗐는가?"
},
en: {
    mint_wait: "Wait for",
    mint_wait_set1: "seconds",

    mint_sha256: "SHA256",
    mint_print: "console.log",
    mint_urlcodec: "URL",
    mint_copy: "Copy to clipboard",
    mint_ip: "IP Address",
    mint_toast1: "Toast content:",
    mint_toast2: "duration:",

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

    date_picker: 'date:',
    date_now: "current date/time",
    date_year: "current year",
    date_month: "current month",
    date_day: "current day",
    date_hour: "current hour",
    date_minute: "current minute",
    date_second: "current second",
    date_week: "current weekday",

    key1: "Is key",
    keydown: "pressed?",
    keyup: "released?",
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
