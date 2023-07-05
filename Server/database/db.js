const db = require('./db.config.js');

/*
=================
Player Queries
=================
*/

const createPlayer = async (name) => {
  return await db.query('INSERT INTO players (name) VALUES ($1)', [name]);
};

const updatePlayer = async (id, name) => {
  return await db.query('UPDATE players SET name = $1 WHERE id = $2', [
    name,
    id,
  ]);
};

const deletePlayer = async (id) => {
  return await db.query('DELETE FROM players WHERE id = $1', [id]);
};

const fetchPlayers = async () => {
  return await db.query('SELECT * FROM players');
};

/*
=================
Instrument Queries
=================
*/
const createInstrument = async (name) => {
  return await db.query('INSERT INTO instruments (name) VALUES ($1)', [name]);
};

const updateInstrument = async (id, name) => {
  return await db.query('UPDATE instruments SET name = $1 WHERE id = $2', [
    name,
    id,
  ]);
};

const deleteInstrument = async (id) => {
  return await db.query('DELETE FROM instruments WHERE id = $1', [id]);
};

const fetchInstruments = async () => {
  return await db.query('SELECT * FROM intruments');
};
/*
=================
Gig Queries
=================
*/
const createGig = async (name, date, venueId) => {
  return await db.query(
    'INSERT INTO gigs (name, date, venue_id) VALUES ($1, $2, $3) RETURNING *',
    [name, date, venueId]
  );
};

const updateGig = async (gigId, name, date, venueId) => {
  return await db.query(
    'UPDATE gigs SET name = $1, date = $2, venue_id = $3 WHERE id = $4',
    [name, date, venueId, gigId]
  );
};

const deleteGig = async (id) => {
  return await db.query('DELETE FROM gigs WHERE id = $1', [id]);
};

const fetchGigs = async () => {
  return await db.query('SELECT * FROM gigs');
};

const insertInstrumentGig = async (instruments, gigId) => {
  const query = {
    text: `
    INSERT INTO instruments_players_gigs (gig_id, instrument_id, player_id)
    VALUES 
    `,
    values: [],
  };

  let placeholders = [];
  let paramIndex = 1;

  for (const instrument of instruments) {
    query.values.push(gigId, instrument, null);
    placeholders.push(`($${paramIndex++}, $${paramIndex++}, $${paramIndex++})`);
  }

  query.text += placeholders.join(',');
  return await db.query(query);
};

const getGigVenueJoinData = async () => {
  const query = `
        SELECT g.name, g.date, g.id, v.name as venue_name, v.location FROM gigs g
        INNER JOIN venues v
        ON v.id = g.venue_id
    `;
  return await db.query(query);
};

const getGigPlayerInstrument = async (gigId) => {
  const query = `
    SELECT i.name as instrument, g.name
    FROM gigs g
    INNER JOIN instruments_players_gigs ipg ON ipg.gig_id = g.id
    INNER JOIN instruments i ON i.id = ipg.instrument_id
    WHERE g.id = $1
    `;
  return await db.query(query, [gigId]);
};
/*
=================
Venue Queries
=================
*/

const createVenue = async (name) => {
  return await db.query('INSERT INTO venues (name) VALUES ($1)', [name]);
};

const updateVenue = async (id, name) => {
  return await db.query('UPDATE venues SET name = $1 WHERE id = $2', [
    name,
    id,
  ]);
};

const deleteVenue = async (id) => {
  return await db.query('DELETE FROM venues WHERE id = $1', [id]);
};

const fetchVenues = async () => {
  return await db.query('SELECT * FROM venues');
};

module.exports = {
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
  getGigVenueJoinData,
  getGigPlayerInstrument,
};
