const knex = require('knex')({
    client: 'pg',
    connection: {
        // host: process.env.DB_HOST,
        host: "ec2-54-165-178-178.compute-1.amazonaws.com",
        port: 5432,
        // user: process.env.DB_USER,
        user: "qzynksgchmpthq",
        // password: process.env.DB_PASSWORD,
        password: "1400068f4ff42f4b868af2b8d43925552679faaf52a117c55029981b75731ca1",
        // database: process.env.DB_DATABASE
        database: "d85q10umlu7bcn"
    },
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = knex;