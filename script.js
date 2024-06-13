function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    const key = parseInt(document.getElementById('key').value, 10);
    const result = caesarCipher(plaintext, key);
    document.getElementById('result-text').innerText = result;
}

function decrypt() {
    const ciphertext = document.getElementById('plaintext').value;
    const key = parseInt(document.getElementById('key').value, 10);
    const result = caesarCipher(ciphertext, -key);
    document.getElementById('result-text').innerText = result;
}

function caesarCipher(str, key) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            let shiftedCode;
            if (code >= 65 && code <= 90) {
                shiftedCode = ((code - 65 + key) % 26 + 26) % 26 + 65;
            } else if (code >= 97 && code <= 122) {
                shiftedCode = ((code - 97 + key) % 26 + 26) % 26 + 97;
            }
            return String.fromCharCode(shiftedCode);
        }
        return char;
    }).join('');
}
