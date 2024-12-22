function decrypt(encoded) {
    let decrypted = [];
    for (let i = 0; i < encoded.length; i++) {
        let value = encoded.charCodeAt(i); // Get the Unicode value of the character
        let firstChar = String.fromCharCode(value >> 8);  // Extract the higher-order byte
        let secondChar = String.fromCharCode(value & 0xFF); // Extract the lower-order byte
        decrypted.push(firstChar);
        decrypted.push(secondChar);
    }
    return decrypted.join(''); // Combine the decrypted characters into a string
}

// Example usage:
let encodedMessage = "…"; // Replace with your encoded string
let originalMessage = decrypt(encodedMessage);
console.log(originalMessage); // Print the decrypted message
