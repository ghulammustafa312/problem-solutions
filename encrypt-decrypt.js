function encryptText(text) {
  let result = "";
  for (let [index, value] of text.entries()) {
    const encryptedCode = index !== text.length - 1 ? "::::;" : "";
    result += value + encryptedCode;
  }
  return result;
}
function decryptText(text) {
  let result = text.split("::::;");

  return result;
}

const text = ["lint", "code", "love", "you"];
const encryptedText = encryptText(text);
const decryptedText = decryptText(encryptedText);
console.log("🚀 ~ file: encrypt-decrypt.js:17 ~ decryptedText:", decryptedText);
