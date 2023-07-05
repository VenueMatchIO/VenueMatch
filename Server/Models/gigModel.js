class Gig {
  constructor(name, venue, date, instruments) {
    this.name = name;
    this.venue = venue;
    this.date = date;
    this.instruments = instruments;
  }

  async createGig() {}

  async getGig(id) {}

  async updateGig() {}

  async deleteGig() {}
}

module.exports = Gig;
