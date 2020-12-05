# Membership API

Free Node/Typescript, MongoDB stack simple membership API with SMTP features.

## Installation

```sh
$ npm install
```

## Configuration

- Edit **config.ts** file to setup required non-secure variables.
- Save **.env.example** file as **.env** in the project root and edit required secure variables.

## Development

```sh
$ npm start
```

## Multi-Language Support with i18n

i18n wires up a plain http server and return "Hello" or "Hallo" depending on browsers 'Accept-Language'.

- Edit options **config > i18n** in **config.ts** file.
- Add/remove language files under **translations** folder.


## Endpoints

Matchub currently has the following endpoints.

| Name               | Method   | Path                   |
|--------------------|----------|------------------------|
| Sign Up            | `POST`   | /api/user/signup       |
| Login              | `POST`   | /api/user/login        |
| User               | `GET`    | /api/user              |
| Email Verification | `POST`   | /api/user/verify/email |

## License

[MIT](https://https://github.com/senerdude/membership-api/blob/main/LICENSE)