CREATE TABLE Players (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE Instruments (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE Venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR
    location VARCHAR
);

CREATE TABLE Gigs (
    id SERIAL PRIMARY KEY,
    name VARCHAR
    venue_id INT,
    FOREIGN KEY (venue.id) REFERENCES Venues(id)
)

CREATE TABLE Players_to_Instruments (
    player_id INT,
    instrument_id INT,
    PRIMARY KEY (player_id, instrument_id),
    FOREIGN KEY (player_id) REFERENCES Players(id),
    FOREIGN KEY (instrument_id) REFERENCES Instruments(id)
)

CREATE TABLE Players_to_Gigs (
    player_id INT,
    gig_id INT,
    PRIMARY KEY (player_id, gig_id),
    FOREIGN KEY (player_id)  REFERENCES Players(id),
    FOREIGN KEY (gig_id) REFERENCES Gigs(id)
)