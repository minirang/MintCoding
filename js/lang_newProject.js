const params = new URLSearchParams(window.location.search);

let lang = params.get("lang") || "ko";

if (lang !== "ko" && lang !== "en") {
    lang = "ko";
}

const script = document.createElement("script");

script.src =
    "https://unpkg.com/blockly/msg/" + lang + ".js";

document.head.appendChild(script);
