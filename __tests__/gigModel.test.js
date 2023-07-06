const db = require('../Server/database/db.config');
const Gig = require('../Server/Models/gigModel.js');

let testGigId;

afterEach(async () => {
    await db.query('DELETE FROM instruments_players_gigs WHERE gig_id = $1', [testGigId]);
    await db.query('DELETE FROM gigs WHERE id = $1', [testGigId]);
});

test('createGig inserts a new gig and returns it', async () => {
    const gig = new Gig('Test Gig', 1, '2023-07-07', [1, 2, 3]);

    const result = await gig.createGig();

    testGigId = result.id;

    console.log(result);
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty('name', 'Test Gig');
})