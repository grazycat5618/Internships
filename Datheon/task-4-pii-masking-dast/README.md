# Task 4: Public Endpoint Shielding & Automated DAST

## Objective
Enforce zero-leakage data sanitization on public lookup endpoints and integrate automated security testing in CI/CD.

## 1. PII Masking (`masking.js`)
*   **Implementation:** Created utility functions to dynamically mask emails (e.g., `j***e@domain.com`) and phone numbers before returning data to public endpoints. This prevents data leakage in public certificate verification or order tracking systems.

## 2. HTTP Security Headers (`headers.js`)
*   **Implementation:** Added strict HTTP headers to protect against common web vulnerabilities:
    *   `X-Frame-Options: DENY` (Prevents Clickjacking).
    *   `X-Content-Type-Options: nosniff` (Prevents MIME-sniffing).
    *   `Strict-Transport-Security` (Enforces HTTPS).
    *   `Content-Security-Policy` (Mitigates XSS attacks).

## 3. Automated DAST Pipeline (`.github/workflows/security-scan.yml`)
*   **Implementation:** Created a GitHub Actions CI/CD workflow that triggers on every push or pull request. It automatically runs an OWASP ZAP baseline scan to detect exposed secrets, broken headers, and vulnerabilities before code is merged.
