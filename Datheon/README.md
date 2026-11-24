# Datheon Application Security & API Pentesting Internship

**Candidate:** Selo David Sethibo
**Program:** Datheon 2026 Engineering Cohort (Batch 01)
**Role:** Application Security & API Pentesting Intern

## Overview
This repository contains my completed portfolio for the Datheon 4-week virtual internship. The program focuses on identifying, exploiting, and remediating modern API vulnerabilities, specifically Insecure Direct Object Reference (IDOR) and Broken Object Level Authorization (BOLA), alongside implementing zero-trust session management and secure CI/CD pipelines.

## Project Structure

### Task 1: Black-Box Reconnaissance & IDOR Discovery
* Objective: Identify and exploit an unauthenticated data leak using cURL and Browser DevTools.
* Deliverable: A professional Vulnerability Disclosure Report with CVSS 3.1 scoring and proof-of-concept evidence.

### Task 2: Remediating BOLA/IDOR in Node.js
* Objective: Fix the vulnerability discovered in Task 1 by implementing authorization guards.
* Deliverable: Hardened route handler code, an automated integration test suite, and a Git diff pull request.

### Task 3: Cryptographic Session Security
* Objective: Replace vulnerable client-side storage with secure, tamper-proof session tokens.
* Deliverable: A secure authentication module using HMAC-SHA256 signed JWTs stored in HTTP-Only cookies, alongside a sliding-window rate limiter.

### Task 4: Public Endpoint Shielding & DAST
* Objective: Enforce zero-leakage data sanitization and integrate automated security testing.
* Deliverable: PII masking utilities, strict HTTP security headers, and a GitHub Actions workflow integrating OWASP ZAP for automated DAST scanning.
