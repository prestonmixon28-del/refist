function validateInput(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

function validateUsername(username) {
    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    return usernamePattern.test(username);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function validatePromoCode(promoCode) {
    const promoCodePattern = /^[A-Z0-9]{6}$/;
    return promoCodePattern.test(promoCode);
}

function formatPhoneNumber(phone) {
    const phonePattern = /^(\d{3})(\d{3})(\d{4})$/;

    if (!validatePhone(phone)) {
        return null;
    }

    return phone.replace(phonePattern, "($1) $2-$3");
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

console.log("-- Phone Test --");

console.log(validatePhone("1234567890")); 
console.log(validatePhone("12345")); 
console.log(validatePhone("12345678901")); 
console.log(validatePhone("123-456-7890"));

console.log("-- Promo Code Test --");

console.log(validatePromoCode("ABC123"));
console.log(validatePromoCode("abc123"));
console.log(validatePromoCode("A1B2C3"));
console.log(validatePromoCode("1234567"));
console.log(validatePromoCode("!@#$%^"));

console.log("-- Phone Number Formatting Test --");

console.log(formatPhoneNumber("1234567890"));
console.log(formatPhoneNumber("12345"));
console.log(formatPhoneNumber("12345678901"));
console.log(formatPhoneNumber("123-456-7890"));