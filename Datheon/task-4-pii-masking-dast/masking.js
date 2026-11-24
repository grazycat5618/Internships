// masking.js
// Utility to mask Personally Identifiable Information (PII)

/**
 * Masks an email address (e.g., john.doe@test.com -> j***e@test.com)
 */
function maskEmail(email) {
    if (!email || !email.includes('@')) return email;
    const [localPart, domain] = email.split('@');
    
    if (localPart.length <= 2) {
        return `${localPart[0]}***@${domain}`;
    }
    
    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];
    return `${firstChar}***${lastChar}@${domain}`;
}

/**
 * Masks a phone number (e.g., 1234567890 -> ******7890)
 */
function maskPhone(phone) {
    if (!phone || phone.length < 4) return "****";
    return phone.slice(0, -4).replace(/./g, '*') + phone.slice(-4);
}

// Example Usage:
const user = { email: "selo@test.com", phone: "59512345" };
console.log("Original:", user);
console.log("Masked:", {
    email: maskEmail(user.email),
    phone: maskPhone(user.phone)
});

module.exports = { maskEmail, maskPhone };
