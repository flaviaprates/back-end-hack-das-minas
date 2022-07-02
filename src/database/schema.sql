CREATE DATABASE hack_das_minas;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
  	name TEXT NOT NULL,
  	last_name TEXT,
  	email TEXT NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    phone TEXT NOT NULL,
  	password TEXT NOT NULL,
    legal_guardian_name TEXT,
    legal_guardian_email TEXT,
    points INTEGER DEFAULT 0
);
