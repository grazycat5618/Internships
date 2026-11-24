// secure.js
// This is the SECURE code. It checks authorization middleware.

app.get('/rest/basket/:id', authenticateToken, (req, res) => {
    const requestedBasketId = req.params.id;
    const loggedInUserId = req.user.id; // Extracted from the JWT token

    // FIX: We query the database for BOTH the basket ID and the logged-in user's ID.
    // If the basket belongs to someone else, this will return null.
    const basket = database.findBasketByUserAndId(requestedBasketId, loggedInUserId);
    
    if (basket) {
        res.status(200).json(basket);
    } else {
        // SECURE: Return 403 Forbidden or 404 Not Found. 
        // Do not leak whether the basket exists to other users.
        res.status(403).json({ error: "Unauthorized access to this basket" });
    }
});
