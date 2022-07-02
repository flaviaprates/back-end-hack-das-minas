const yup = require('./config-yup');

const verifyRegisterUser = yup.object().shape({
    name: yup.string()
        .min(3, { message: "O campo nome é obrigatório." })
        .required({ message: "O campo nome é obrigatório." }),
    last_name: yup.string(),
    email: yup.string()
        .email({ message: "Formato de e-mail inválido." })
        .required({ message: "O campo e-mail é obrigatório." }),
    birth_date: yup.date()
        .required({ message: "O campo data é obrigatório." }),
    phone: yup.string()
        .min(8, { message: "Telefone inválido." })
        .required({ message: "O campo telefone é obrigatório" }),
    password: yup.string()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
        .required({ message: "O campo senha é obrigatório." }),
    legal_guardian_name: yup.string(),
    legal_guardian_email: yup.string()
});

module.exports = {
    verifyRegisterUser
}