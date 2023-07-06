const db = require('../Server/database/db.config');
const {
  createPlayer,
  updatePlayer,
  deletePlayer,
  fetchPlayers,
  createInstrument,
  updateInstrument,
  deleteInstrument,
  fetchInstruments,
  createGig,
  updateGig,
  deleteGig,
  fetchGigs,
  createVenue,
  updateVenue,
  deleteVenue,
  fetchVenues,
  insertInstrumentGig,
} = require('../Server/database/db.js');

describe('createPlayer', () => {
    beforeEach(async () => {
        await db.query('DELETE FROM players');
    });

    test('inserts a new player', async () => {
        await createPlayer('Test Player');

        const result = await fetchPlayers();
        expect(result.rows).toHaveLength(1);
        expect(result.rows[0].name).toBe('Test Player');
    })
})
