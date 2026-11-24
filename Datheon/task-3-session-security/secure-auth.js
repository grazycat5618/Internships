// secure-auth.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'super-secret-key-change-in-production';

// 1. LOGIN ENDPOINT: Issues the secure token
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // (Assuming database check here for email/password)
    const user = { id: 1, email: email }; 

    // Create the token, expires in 1 hour
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    // FIX: Set token in an HTTP-Only, Secure, SameSite cookie
    // This prevents XSS attacks from reading the token via JavaScript
    res.cookie('auth_token', token, {
        httpOnly: true,  // JS cannot read this cookie
        secure: true,    // Only sent over HTTPS
        sameSite: 'Strict', // Prevents CSRF attacks
        maxAge: 3600000  // 1 hour
    });

    res.status(200).json({ message: "Login successful. Token set in HTTP-Only cookie." });
});

// 2. AUTHORIZATION MIDDLEWARE: Verifies the cookie
const verifyToken = (req, res, next) => {
    // Read token from the cookie, not from the Authorization header
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach user info to the request
        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid or expired token." });
    }
};

// Example protected route
app.get('/api/dashboard', verifyToken, (req, res) => {
    res.json({ message: `Welcome to the dashboard, ${req.user.email}` });
});
