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

const getPlayerByInstrument = async (instrumentId) => {
  const query = `
  SELECT p.name, p.id as player_id FROM players p
  JOIN players_instruments pi ON pi.player_id = p.id
  JOIN instruments i ON $1 = pi.instrument_id AND i.id = $1
  `;

  return await db.query(query, [instrumentId]);
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
  return await db.query('SELECT * FROM instruments');
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

const fillGigPlayer = async (gigId, playerId, instrumentId) => {
  const query = `
        UPDATE instruments_players_gigs
        SET player_id = $1
        WHERE instrument_id = $2
            AND gig_id = $3
            AND player_id IS NULL
            AND ctid IN (
                SELECT ctid
                FROM instruments_players_gigs
                WHERE instrument_id = $2
                  AND gig_id = $3
                  AND player_id IS NULL
                LIMIT 1
              )
        RETURNING *;
    `;
  try {
    return await db.query(query, [playerId, instrumentId, gigId]);
  } catch (error) {
    console.error(error);
    return error;
  }
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
    SELECT i.name as instrument, i.id as instrument_id, g.name, p.name as player, ipg.join_id 
    FROM gigs g
    INNER JOIN instruments_players_gigs ipg ON ipg.gig_id = g.id
    INNER JOIN instruments i ON i.id = ipg.instrument_id
    LEFT JOIN players p ON p.id = ipg.player_id
    WHERE g.id = $1
    `;
  return await db.query(query, [gigId]);
};

const removeInstrumentGig = async (joinId) => {
  const query = `DELETE FROM instruments_players_gigs WHERE join_id = $1`;

  return await db.query(query, [joinId]);
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
  getPlayerByInstrument,
  fillGigPlayer,
  removeInstrumentGig,
};
