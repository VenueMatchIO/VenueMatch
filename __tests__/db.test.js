const db = require('../Server/database/db.config');
const { createPlayer, fetchPlayers } = require('../Server/database/db.js');

let testPlayerId;

beforeEach(async () => {
    const result = await createPlayer('Test Player');
    testPlayerId = result.id;
});

afterEach(async () => {
    await db.query('DELETE FROM players WHERE id = $1', [testPlayerId]);
});

describe('createPlayer', () => {
    test('inserts a new player', async () => {
        await createPlayer('Test Player');
        const result = await fetchPlayers();
        expect(result.rows[result.rows.length - 1].name).toBe('Test Player');
    });
});

