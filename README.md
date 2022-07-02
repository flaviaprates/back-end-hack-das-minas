# Back-end Hack das Minas - Equipe Atena

## Instruções para uso da API

Para a utilização dessa `API` é indispensável instalar todas as bibliotecas que foram utilizadas no projeto com o `npm install` e para dar start no projeto basta rodar `npm run dev` no terminal.

Essa `API` possui uma rota para `cadastrar usuárias`, para `login`, para `obter dados da usuária`, para `cadastrar pontos` e para `obter o total de pontos`.

Abaixo estão os exemplos de uso de cada rota.



#### 1. `Cadastrar usuárias - POST` https://api-hack-das-minas.herokuapp.com/register/user

Nesse endpoint você pode fazer o cadastro de uma nova usuária. Para isso você deve passar no `body` as propriedades como no exemplo abaixo:

```json=
{
	"name": "Flávia",
  "last_name": "",
  "email": "flavia@email.com",
  "birth_date": "1999/01/01",
  "phone": "99999999999",
  "password": "123456"
}
```

O retorno segue o exemplo abaixo:

```json=
{
	"message": "Usuária cadastrada com sucesso!"
}
```

---

#### 2. `Login - POST` https://api-hack-das-minas.herokuapp.com/login

Nesse endpoint você pode realizar o login. Para isso você deve passar no `body` as propriedades como no exemplo abaixo:

```json=
{
  "email": "flavia@email.com",
  "password": "123456"
}
```

O retorno segue o exemplo abaixo:

```json=
{
	"user": {
		"id": 1,
		"name": "Flávia",
		"last_name": "",
		"email": "flavia@email.com",
		"birth_date": "1994-07-23T00:00:00.000Z",
		"phone": "71984250400",
		"legal_guardian_name": null,
		"legal_guardian_email": null,
		"points": 0
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2NzY2NzgzLCJleHAiOjE2NTY4MDI3ODN9.F_eo-4Um-xJRBiB0odGVAmceBnZlaZJT5k4GlTjC3H0"
}
```

---

#### 3. `Obter dados da usuária - GET` https://api-hack-das-minas.herokuapp.com/user

Nesse endpoint você obtém os dados da usuária logada.

Não tem requisição no `body` e o retorno segue o exemplo abaixo:

```json=
{
	"id": 1,
	"name": "Flávia",
	"last_name": "",
	"email": "flavia@email.com",
	"birth_date": "1999-01-01T00:00:00.000Z",
	"phone": "99999999999",
	"legal_guardian_name": null,
	"legal_guardian_email": null,
	"points": 0
}
```

---

#### 4. `Cadastrar pontos - PUT` https://api-hack-das-minas.herokuapp.com/register/points

Nesse endpoint você pode cadastrar pontos para a usuária logada. São registrados 100 pontos por ver.

Não tem requisição no `body` e o retorno segue o exemplo abaixo:

```json=
{
	"message": "Pontos cadastrados com sucesso!"
}
```

---

#### 5. `Obter o total de pontos - GET` https://api-hack-das-minas.herokuapp.com/points

Nesse endpoint você pode obter o total de pontos da usuária logada.

Não tem requisição no `body` e o retorno segue o exemplo abaixo:

```json=
{
	"total": 100
}
```
