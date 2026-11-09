function validateInput(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

function validateUsername(username) {
    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    return usernamePattern.test(username);
}

console.log("-- Name Test --");

console.log(validateName("John Doe")); 
console.log(validateName("B"));
console.log(validateName("John123"));

console.log("-- Username Test --");

console.log(validateUsername("user_123"));
console.log(validateUsername("us"));
console.log(validateUsername("user!@#"));
console.log(validateUsername("validUserName"));