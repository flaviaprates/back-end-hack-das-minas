const yup = require('./config-yup');

const verifyUserInformation = yup.object().shape({
    last_period: yup.date()
        .required({ message: "O campo é obrigatório." }),
    period_length: yup.string()
        .required({ message: "O campo é obrigatório" }),
    intensity: yup.string()
        .required({ message: "O campo é obrigatório" }),
    cycle_length: yup.string()
        .required({ message: "O campo é obrigatório" }),
    birth_control_method: yup.boolean()
        .required({ message: "O campo é obrigatório" })
});

module.exports = {
    verifyUserInformation
}