CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE instruments (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    classification VARCHAR
);

CREATE TABLE venues (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    location VARCHAR
);

CREATE TABLE gigs (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    date VARCHAR,
    venue_id INT,
    FOREIGN KEY (venues.id) REFERENCES venues(id)
)

CREATE TABLE players_instruments (
    player_id INT,
    instrument_id INT,
    PRIMARY KEY (player_id, instrument_id),
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (instrument_id) REFERENCES instruments(id)
)

CREATE TABLE instruments_players_gigs (
    instrument_id INT,
    gig_id INT,
    player_id INT, -- null ok
    PRIMARY KEY (instruments_id, player_id, gig_id),
    FOREIGN KEY (instruments_id) REFERENCES instruments(id),
    FOREIGN KEY (players_id)  REFERENCES players(id),
    FOREIGN KEY (gig_id) REFERENCES gigs(id)
)

CREATE TABLE players_gigs (
    player_id INT,
    gig_id INT,
    PRIMARY KEY (player_id, gig_id),
    FOREIGN KEY (player_id)  REFERENCES players(id),
    FOREIGN KEY (gig_id) REFERENCES gigs(id)
)