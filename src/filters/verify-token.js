const knex = require('../database/connection');
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Token inválido." })
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, process.env.SENHA_JWT);

        const currentUser = await knex('users').where({ id }).first();

        if (!currentUser) {
            return res.status(404).json({ message: "Usuária não encontrada." });
        }

        const { password, ...user } = currentUser;

        req.user = user;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verifyToken