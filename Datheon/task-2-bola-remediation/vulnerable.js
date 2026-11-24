// vulnerable.js
// This is the BAD code. It trusts the user input blindly.

app.get('/rest/basket/:id', (req, res) => {
    const basketId = req.params.id;
    
    // VULNERABILITY: The database is queried using ONLY the ID from the URL.
    // It does not check if the person asking actually owns this basket!
    const basket = database.findBasketById(basketId);
    
    if (basket) {
        res.status(200).json(basket);
    } else {
        res.status(404).json({ error: "Basket not found" });
    }
});
