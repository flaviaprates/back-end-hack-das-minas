const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const { verifyRegisterUser } = require('../filters/verify-resgister-user');

const registerUser = async (req, res) => {
    const { name, last_name, email, birth_date, phone, password, legal_guardian_name, legal_guardian_email } = req.body;

    try {
        await verifyRegisterUser.validate(req.body);

        const emailExists = await knex('users')
            .where({ email })
            .first();

        if (emailExists) {
            return res.status(400).json({ message: "E-mail já cadastrado." });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await knex('users')
            .insert({ name, last_name, email, birth_date, phone, password: passwordHash, legal_guardian_name, legal_guardian_email });

        if (!user) {
            return res.status(400).json({ message: "Algo ocorreu e não foi possível cadastrar a usuária." });
        }

        return res.status(200).json({ message: "Usuária cadastrada com sucesso!" });

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const currentUserData = async (req, res) => {
    return res.status(200).json(req.user);
}

module.exports = {
    registerUser,
    currentUserData
}