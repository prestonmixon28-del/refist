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

function proccessRegistration(user) {
    const error = [];

    if (!validateInput(user.name)) {
        error.push("Invalid name. Name should only contain letters and spaces.");
    }

    if (!validateUsername(user.username)) {
        error.push("Invalid username. Username should be 3-16 characters long and can only contain letters, numbers, and underscores.");
    }

    if (!validatePhone(user.phone)) {
        error.push("Invalid phone number. Phone number should be exactly 10 digits.");
    }

    if (errors.length > 0) {
        return { success: false, errors: error };
    }

    return {
        success: true, data: {
            name: user.name,
            username: user.username,
            phone: formatPhoneNumber(user.phone),
            discountApplied: validatePromoCode(user.promoCode)
    }

};

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

const sampleUser = [
    {
    name: "Alex Johnson",

        username: "alex_j",

        phone: "555-234-5678",

        promoCode: "SUMMER"

    },

    {

        name: "B",

        username: "cool_user_123",

        phone: "555.345.6789",

        promoCode: "summer"

    },

    {

        name: "Charlie Brown",

        username: "charlie!brown",

        phone: "5554567890",

        promoCode: "SUMMER2026"

    },

    {

        name: "Dana Scully",

        username: "da",

        phone: "555-567-8901",

        promoCode: "SuMmEr"

    },

    {

        name: "Edward Nygma",

        username: "the_riddler_super_fan",

        phone: "555-678-901",

        promoCode: null

    },

    {

        name: "Fiona Gallagher",

        username: "fiona_g",

        phone: "555-789-0123",

        promoCode: ""

    }

];

console.log("--- Registration Results ---");

for (const user of sampleUser) {
    const result = proccessRegistration(user);
}