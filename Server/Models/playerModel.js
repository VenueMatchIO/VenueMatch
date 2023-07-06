const db = require('../database/db');

class Player {
  constructor(name, playerId, instruments) {
    this.name = name;
    this.playerId = playerId;
    this.instruments = instruments;
  }

  async createPlayer() {
    let createPlayerData;
    try {
      const response = await db.createPlayer(
        this.name,
        this.playerId,
        this.instruments
      );
      createPlayerData = response.rows;
      return createPlayerData;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getPlayers() {
    try {
      const response = await db.fetchPlayers();
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updatePlayer(id, name, instruments) {
    try {
      const response = await db.updatePlayer(
        this.playerId,
        this.name,
        this.instruments
      );
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async deletePlayer() {
    try {
      const response = await db.deleteGig(this.playerId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getPlayersByInstrument(id) {
    try {
      const response = await db.getPlayerByInstrument(id);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Player;
