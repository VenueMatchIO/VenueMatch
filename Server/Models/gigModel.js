const db = require('../database/db');

class Gig {
  constructor(name, venueId, date, instruments) {
    this.name = name;
    this.venueId = venueId;
    this.date = date;
    this.instruments = instruments;
  }

  async createGig() {
    let createGigData;
    // creating the gig in the database
    try {
      const response = await db.createGig(this.name, this.date, this.venueId);
      createGigData = response.rows;
    } catch (error) {
      console.error(error);
    }

    const gigId = createGigData[0].id;

    if (this.instruments.length !== 0) {
      const response = await Gig.insertInstrument(this.instruments, gigId);
    }

    return createGigData[0];
  }

  static async getGigs() {
    try {
      const response = await db.fetchGigs();
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateGig(id, name, date, venue_id) {
    try {
      const response = await db.updateGig(
        this.id,
        this.name,
        this.date,
        this.venueId
      );
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async fillGigPlayer(gigId, playerId, instrumentId) {
    try {
      const response = await db.fillGigPlayer(gigId, playerId, instrumentId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async deleteGig(gigId) {
    try {
      const response = await db.deleteGig(gigId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async joinGigVenue() {
    try {
      const response = await db.getGigVenueJoinData();
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getGigDetails(id) {
    try {
      const response = await db.getGigPlayerInstrument(id);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async insertInstrument(instrumentId, gigId) {
    try {
      const response = await db.insertInstrumentGig([instrumentId], gigId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async removeInstrument(joinId) {
    try {
      const response = await db.removeInstrumentGig(joinId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Gig;
