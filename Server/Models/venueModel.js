const db = require('../database/db');

class Venue {
  constructor(name, location) {
    this.name = name;
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

  static async deleteVenue(venueId) {
    try {
      const response = await db.deleteVenue(venueId);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Venue;
