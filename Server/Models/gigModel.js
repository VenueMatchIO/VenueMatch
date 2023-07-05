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

    try {
      const response = await db.insertInstrumentGig(this.instruments, gigId);
    } catch (error) {
      console.error(error);
      return error;
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

  async deleteGig() {
    try {
      const response = await db.deleteGig(this.id);
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
}

module.exports = Gig;
