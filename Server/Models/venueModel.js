const db = require('../database/db');

class Venue {
  constructor(name, venueId, location) {
    this.name = name;
    this.venueId = venueId;
    this.location = location;
  }

  async createVenue() {
    let createVenueData;
    try {
      const response = await db.createVenue(this.name, this.location);
      createVenueData = response.rows;
      return createVenueData;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getVenues() {
    try {
      const response = await db.fetchVenues();
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateVenue() {
    try {
      const response = await db.updateVenue(this.venueId, this.name);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async deleteVenue() {
    try {
      const response = await db.deleteVenue(this.venueId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Venue;
