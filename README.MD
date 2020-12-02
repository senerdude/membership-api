# Membership API

Free Node/Typescript, MongoDB stack simple membership API with SMTP features.

## Installation

```sh
$ npm install
```

## Configuration

- Save **congif.ts.example** file as **congif.ts** in the project root and edit required non-secure variables.
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