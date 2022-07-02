const yup = require('./config-yup');

const verifyLogin = yup.object().shape({
    email: yup.string()
        .email("Formato de e-mail inválido")
        .required("O campo e-mail é obrigatório."),
    password: yup.string()
        .required("O campo senha é obrigatório")
});

module.exports = {
    verifyLogin
}