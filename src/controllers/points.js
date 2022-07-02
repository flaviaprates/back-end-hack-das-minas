const knex = require('../database/connection');

const registerPoints = async (req, res) => {
    const { id, points } = req.user;
    const newPoints = 100;

    try {
        const userUpdatedPoints = await knex("users")
            .update({ points: points + newPoints })
            .where({ id });

        if (!userUpdatedPoints) {
            return res.status(400).json({ message: "Algo ocorreu e não foi possível atualizar os pontos." });
        }

        return res.status(200).json({ message: "Pontos cadastrados com sucesso!" });

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const currentPoints = async (req, res) => {
    const { points } = req.user;

    return res.status(200).json({ total: points });
}

module.exports = {
    registerPoints,
    currentPoints
}