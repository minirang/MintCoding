async function sha256(text) {

  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    data
  );

  const hashArray = Array.from(
    new Uint8Array(hashBuffer)
  );

  return hashArray.map(b =>
    b.toString(16).padStart(2,"0")
  ).join("");

}

///////////////////////////////////////////////////////
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied to clipboard!: ${text} `);
  }).catch(err => {
    alert("Failed to copy text: ", err);
  });
}
