const db = require('./db.config.js')

/*
=================
Player Queries
=================
*/

const createPlayer = (name) => {
    return db.query('INSERT INTO players (name) VALUES ($1)', [name]);
}

const updatePlayer = (id, name) => {
    return db.query('UPDATE players SET name = $1 WHERE id = $2', [name, id]);
}

const deletePlayer = (id) => {
    return db.query('DELETE FROM players WHERE id = $1', [id]);
}

const fetchPlayers = () => {
    return db.query('SELECT * FROM players');
}

/*
=================
Instrument Queries
=================
*/
const createInstrument = (name) => {
    return db.query('INSERT INTO instruments (name) VALUES ($1)', [name]);
}

const updateInstrument = (id, name) => {
    return db.query('UPDATE instruments SET name = $1 WHERE id = $2', [name, id]);
}

const deleteInstrument = (id) => {
    return db.query('DELETE FROM instruments WHERE id = $1', [id]);
}

const fetchInstruments = () => {
    return db.query('SELECT * FROM intruments');
}
/*
=================
Gig Queries
=================
*/
const createGig = (name) => {
    return db.query('INSERT INTO gigs (name) VALUES ($1)', [name]);
}

const updateGig = (id, name) => {
    return db.query('UPDATE gigs SET name = $1 WHERE id = $2', [name, id]);
}

const deleteGig = (id) => {
    return db.query('DELETE FROM gigs WHERE id = $1', [id]);
}

const fetchGigs = () => {
    return db.query('SELECT * FROM gigs');
}
/*
=================
Venue Queries
=================
*/

const createVenue = (name) => {
    return db.query('INSERT INTO venues (name) VALUES ($1)', [name]);
}

const updateVenue = (id, name) => {
    return db.query('UPDATE venues SET name = $1 WHERE id = $2', [name, id]);
}

const deleteVenue = (id) => {
    return db.query('DELETE FROM venues WHERE id = $1', [id]);
}

const fetchVenues = () => {
    return db.query('SELECT * FROM venues');
}

module.exports = {
    createPlayer, updatePlayer, deletePlayer, fetchPlayers, 
    createInstrument, updateInstrument, deleteInstrument, fetchInstruments,
    createGig, updateGig, deleteGig, fetchGigs,
    createVenue, updateVenue, deleteVenue, fetchVenues
}; 