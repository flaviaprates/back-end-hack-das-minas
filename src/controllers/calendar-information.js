const knex = require('../database/connection');
const { verifyUserInformation } = require('../filters/verify-user-information');

const registerUserInformation = async (req, res) => {
    const { id } = req.user;
    const { last_period, period_length, intensity, cycle_length, birth_control_method } = req.body;

    try {
        await verifyUserInformation.validate(req.body);

        const userInformation = await knex("user_information")
            .insert({ last_period, period_length, intensity, cycle_length, birth_control_method, user_id: id });

        if (!userInformation) {
            return res.status(400).json({ message: "Algo ocorreu e não foi possível cadastrar as informações." });
        }

        return res.status(200).json({ message: "Informações cadastradas com sucesso!" });

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const currentUserInformation = async (req, res) => {
    const { id } = req.user;

    try {
        const userInformation = await knex("user_information")
            .where({ user_id: id })
            .leftJoin("users", "user_information.user_id", "users.id")
            .select("user_information.*", "users.name as user")
            .first();

        if (!userInformation) {
            return res.status(400).json({ message: "Usuária não encontrada." });
        }

        return res.status(200).json(userInformation);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerUserInformation,
    currentUserInformation
}