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

DROP TABLE IF EXISTS user_information;

CREATE TABLE user_information(
	id SERIAL PRIMARY KEY,
  last_period DATE NOT NULL,
  period_length INTEGER NOT NULL,
  intensity TEXT NOT NULL,
  cycle_length INTEGER NOT NULL,
  birth_control_method BOOLEAN NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id)
);
