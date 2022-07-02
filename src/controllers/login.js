const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { verifyLogin } = require('../filters/verify-login');

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        await verifyLogin.validate(req.body);

        const user = await knex('users')
            .where({ email })
            .first();

        if (!user) {
            return res.status(400).json({ message: "Usuária não cadastrada." });
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
            return res.status(400).json({ message: "E-mail e/ou senha inválidos." });
        }

        const token = jwt.sign({
            id: user.id
        },
            process.env.SENHA_JWT,
            { expiresIn: '10h' });

        const { password: _, ...userData } = user;

        return res.status(200).json({
            user: userData,
            token
        });

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    login
}