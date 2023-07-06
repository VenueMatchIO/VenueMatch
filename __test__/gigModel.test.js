const db = require('../Server/database/db.config');
const Gig = require('../Server/Models/gigModel.js');

beforeEach(async () => {
    await db.query('DELETE FROM instruments_players_gigs');
    await db.query('DELETE FROM gigs');
});

afterEach(async () => {
    await db.query('DELETE FROM instruments_players_gigs');
    await db.query('DELETE FROM gigs');    
});

test('createGig inserts a new gig and returns it', async () => {
    const gig = new Gig('Test Gig', 1, '2023-07-07', [1, 2, 3]);

    const result = await gig.createGig();

    console.log(result, result[0]);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('name', 'Test Gig');
})