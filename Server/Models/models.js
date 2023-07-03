const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB connection complete');
  } catch (err) {
    console.log(err);
  }
}

// { type: mongoose.Types.ObjectId, }

const playerSchema = new mongoose.Schema({
  // players table
  name: {type: String, required: true},
});

// many to many relationship between player and instruments

// create a join table that is players_instruments

/*
    player_id | instrument_id
        5           1
        5           2
        6           3
        7           3
        8           4
        9           4

*/

/*
Tables:
-Players  -> name, id
-Instruments -> 
-Gigs -> venue_id, name
-Venues

(Gigs only belong to one venue, so no join table necessary)
Joins:
-Players to Instruments -> (player_id, instrument_id)
-Players to Gigs -> (player_id, gig_id)

query:

SELECT p.*, i.*
FROM players p
INNER JOIN player_instruments pi ON $1 = pi.player_id // => filters out all other player_id's from this join table
INNER JOIN instruments i ON i.id = pi.instrument_id

value = [playerId]
*/

// venue vs gig -> gig is an event... venue is a location

const gigSchema = new mongoose.Schema({
  // gigs table
  venue: {type: String, required: true},
  // date: { type: Date, required: true },
});

const instSchema = new mongoose.Schema({
  // instruments table
  inst_name: {type: String, required: true},
});

const playerInstSchema = new mongoose.Schema({
  // players_instruments join table
  player_id: {type: mongoose.Types.ObjectId, ref: 'Player'},
  inst_id: {type: mongoose.Types.ObjectId, ref: 'Inst'},
});

const gigInstPlayerSchema = new mongoose.Schema({
  player_id: {type: mongoose.Types.ObjectId, ref: 'Player'},
  inst_id: {type: mongoose.Types.ObjectId, ref: 'Inst'},
  gig_id: {type: mongoose.Types.ObjectId, ref: 'Gig'},
});

// app.get('/gig_insts_by_gig/:id')
// router send this to controller
//

const Player = mongoose.model('Player', playerSchema);
const Gig = mongoose.model('Gig', gigSchema);
const Inst = mongoose.model('Inst', instSchema);
const PlayerInst = mongoose.model('PlayerInst', playerInstSchema);
const GigInstPlayer = mongoose.model('GigInstPlayer', gigInstPlayerSchema);

module.exports = {
  player: Player,
  gig: Gig,
  inst: Inst,
  playerInst: PlayerInst,
  gigInstPlayer: GigInstPlayer,
};
