const knex = require('knex')({
    client: 'pg',
    connection: {
        host: "ec2-44-206-11-200.compute-1.amazonaws.com",
        port: 5432,
        user: "sovxvdoykcwdpy",
        password: "cc5a3fa0506ed5e1456ff496d7d8555e6918c0b01b61f19bb5342619865d4140",
        database: "d2ddr1iqrev0v5"
    },
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = knex;