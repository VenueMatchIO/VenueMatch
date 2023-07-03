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
  name: { type: String, required: true },
});

const gigSchema = new mongoose.Schema({
  venue: { type: String, required: true },
  // date: { type: Date, required: true },
});

const instSchema = new mongoose.Schema({
  inst_name: { type: String, required: true },
});

const playerInstSchema = new mongoose.Schema({
  player_id: { type: mongoose.Types.ObjectId, ref: 'Player' },
  inst_id: { type: mongoose.Types.ObjectId, ref: 'Inst' },
});

const gigInstPlayerSchema = new mongoose.Schema({
  player_id: { type: mongoose.Types.ObjectId, ref: 'Player' },
  inst_id: { type: mongoose.Types.ObjectId, ref: 'Inst' },
  gig_id: { type: mongoose.Types.ObjectId, ref: 'Gig' },
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
