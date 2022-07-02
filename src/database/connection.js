const knex = require('knex')({
    client: 'pg',
    connection: {
        host: "ec2-54-165-178-178.compute-1.amazonaws.com",
        port: 5432,
        user: "qzynksgchmpthq",
        password: "1400068f4ff42f4b868af2b8d43925552679faaf52a117c55029981b75731ca1",
        database: "d85q10umlu7bcn"
    },
    ssl: {
        rejectUnauthorized: false,
        require: true
    }
});

module.exports = knex;