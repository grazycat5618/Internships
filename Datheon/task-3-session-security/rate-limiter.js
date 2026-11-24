// rate-limiter.js
// In-memory store to track requests per IP
const requestCounts = new Map();

const WINDOW_SIZE_IN_MINUTES = 15;
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 login attempts per 15 mins

const rateLimiter = (req, res, next) => {
    const ip = req.ip; 
    const now = Date.now();
    const windowStart = now - (WINDOW_SIZE_IN_MINUTES * 60 * 1000);

    // Get user's request history
    let userHistory = requestCounts.get(ip) || [];
    
    // Filter out requests older than the 15-minute window
    userHistory = userHistory.filter(timestamp => timestamp > windowStart);

    if (userHistory.length >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ 
            error: "Too many login attempts. Please try again after 15 minutes." 
        });
    }

    // Add current request timestamp
    userHistory.push(now);
    requestCounts.set(ip, userHistory);

    // Set standard rate-limit headers
    res.setHeader('X-RateLimit-Limit', MAX_REQUESTS_PER_WINDOW);
    res.setHeader('X-RateLimit-Remaining', MAX_REQUESTS_PER_WINDOW - userHistory.length);

    next();
};

module.exports = rateLimiter;

// Example usage: app.post('/api/login', rateLimiter, loginHandler);
