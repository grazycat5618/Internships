# Task 3: Cryptographic Session Security

## Objective
Replace insecure client-side storage (like `localStorage`) with secure, tamper-proof HTTP-Only cookies, and implement rate limiting to prevent brute-force attacks.

## 1. Secure Authentication (`secure-auth.js`)
*   **Vulnerability:** Storing JWTs in `localStorage` allows Cross-Site Scripting (XSS) attacks to steal user sessions.
*   **Remediation:** Tokens are signed using `HMAC-SHA256` and stored in an `HTTP-Only`, `Secure`, `SameSite=Strict` cookie. This ensures malicious JavaScript cannot access the token, and protects against CSRF.

## 2. Rate Limiting (`rate-limiter.js`)
*   **Vulnerability:** Endpoints are susceptible to brute-force ID guessing and credential stuffing.
*   **Remediation:** Implemented a sliding-window rate limiter using an in-memory store. It tracks requests per IP and blocks users (HTTP 429) if they exceed 5 login attempts within a 15-minute window.
