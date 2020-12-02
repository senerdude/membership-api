# Membership API

Free Node/Typescript, MongoDB stack simple membership API with SMTP features.

## Installation

```sh
$ npm install
```

## Configuration

1 - Save **congif.ts.example** as **congif.ts** in the project root and edit required non-secure variables.
2 - Create an **.env** file in the project root and past veriables below.

```sh
TOKEN_SECRET = your256-bit-key-jJkQ55JGvN7zwB
MONGO_USER = yourDBClient
MONGO_PASSWORD = yourDBPassw0rd
SMTP_USER = noreply@yourdomain.com
SMTP_PASS = smtpPassw0rd
```

## Development

```sh
$ npm start
```
## Endpoints

Matchub currently has the following endpoints.

| Name     | Method   | Path               |
|----------|----------|--------------------|
| Sign Up  | `POST`   | /api/user/signup   |
| Login    | `POST`   | /api/user/login    |
| User     | `GET`    | /api/user          |

## License

[MIT](https://https://github.com/senerdude/membership-api/blob/main/LICENSE)