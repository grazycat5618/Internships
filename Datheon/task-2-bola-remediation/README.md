# Task 2: Remediating Broken Object Level Authorization (BOLA/IDOR)

## Objective
To fix the IDOR vulnerability discovered in Task 1 by implementing object-level authorization.

## The Vulnerability (vulnerable.js)
In the vulnerable code, the API endpoint `/rest/basket/:id` takes the ID directly from the URL and queries the database. It does not verify if the authenticated user actually owns that basket.

## The Fix (secure.js)
The secure implementation uses an authorization middleware (`authenticateToken`) and enforces a strict database query that filters by **both** the requested basket ID and the authenticated user's ID (`req.user.id`). If the user does not own the basket, the server returns a `403 Forbidden` error.
