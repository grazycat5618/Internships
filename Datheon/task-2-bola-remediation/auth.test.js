// auth.test.js
// Automated test suite proving User A cannot access User B's data.

const { getUserBasket } = require('./secure');

describe('BOLA/IDOR Authorization Tests', () => {
    test('User A should NOT be able to read User B basket', () => {
        // Simulating User A (ID: 6) trying to access Basket 1 (owned by User 1)
        const requestingUserId = 6; 
        const requestedBasketId = 1; 

        const result = getUserBasket(requestingUserId, requestedBasketId);

        // The result should be an error (403 Forbidden), not the data
        expect(result.status).toBe(403);
        expect(result.message).toBe("Unauthorized access to this basket");
    });

    test('User B should be able to read their own basket', () => {
        // Simulating User B (ID: 1) accessing their own Basket 1
        const requestingUserId = 1; 
        const requestedBasketId = 1; 

        const result = getUserBasket(requestingUserId, requestedBasketId);

        // The result should be the basket data
        expect(result.status).toBe(200);
    });
});
