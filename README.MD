# Membership API

Free Node/Typescript, MongoDB stack simple membership API with SMTP features.

## Installation

```sh
$ npm install
```

## Configuration

- Edit **config.ts** file to setup required non-secure variables.
- Save **.env.example** file as **.env** in the project root and edit required secure veriables.

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