const db = require('../database/db');

class Instrument {
  constructor(name, instrumentId) {
    this.name = name;
    this.instrumentId = instrumentId;
  }

  async createInstrument() {
    let createInstrumentData;
    try {
      const response = await db.createInstrument(this.name, this.instrumentId);
      createInstrumentData = response.rows;
      return createInstrumentData;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getInstruments() {
    try {
      const response = await db.fetchInstruments();
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async updateInstrument(id, name) {
    try {
      const response = await db.updateInstrument(this.id, this.name);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async deleteInstrument() {
    try {
      const response = await db.deleteGig(this.id);
      return response.rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Instrument;
