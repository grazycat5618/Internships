// headers.js
// Middleware to add comprehensive HTTP security headers to prevent XSS and Clickjacking

const securityHeaders = (req, res, next) => {
    // Prevents the site from being embedded in an iframe (Clickjacking defense)
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Prevents browsers from MIME-sniffing a response away from the declared content-type
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Enforces secure (HTTPS) connections to the server
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    
    // Basic Content Security Policy to restrict where resources can be loaded from
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'");
    
    next();
};

module.exports = securityHeaders;
