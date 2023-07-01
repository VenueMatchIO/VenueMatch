const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const gigSchema = new mongoose.Schema({
  venue: { type: String, required: true },
  date: { type: Date, required: true },
});

const instSchema = new mongoose.Schema({
  inst_name: { type: String, required: true },
});

const playerInstSchema = new mongoose.Schema({
  player_id: { type: Schema.type.objectId, ref: 'Player' },
  inst_id: { type: Schema.type.objectId, ref: 'Inst' },
});

const gigInstPlayerSchema = new mongoose.Schema({
  player_id: { type: Schema.type.objectId, ref: 'Player' },
  inst_id: { type: Schema.type.objectId, ref: 'Inst' },
  gig_id: { type: Schema.type.objectId, ref: 'Gig' },
});

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
