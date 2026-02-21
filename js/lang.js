const translations = {
    ko: {
        title: "민트코딩",
        description: "민트코딩에 오신 것을 환영합니다! 재미있고<br>인터랙티브한 방식으로 블록 코딩을 배워보세요.",
        start: "시작하기"
    },
    en: {
        title: "MintCoding",
        description: "Welcome to MintCoding! Your go-to platform for<br>learning block coding in a fun and interactive way.",
        start: "Get Started"
    }
};

function getLang() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "ko";
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
        startBtn.href = `pages/newProject.html?lang=${lang}`;
    }
}

function langToggle() {
    const currentLang = getLang();
    const newLang = currentLang === "ko" ? "en" : "ko";

    const url = new URL(window.location);
    url.searchParams.set("lang", newLang);

    history.pushState({}, "", url);
    applyLanguage(newLang);
}

window.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLanguage(lang);
});