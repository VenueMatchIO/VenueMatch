const db = require('../database/db');

/*

const {gigName, venueId, date, instruments} = req.body;

const newGig = new Gig(gigName, venueId, date, instruments)
newGig.createGig()


Gig {name: gigName, venueId: venueId, date: date, instruments: [id's]}

*/

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

    return createGigData;
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
}

module.exports = Gig;
