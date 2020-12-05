import dotenv from 'dotenv'
import { IConfig, INodeMailerTemplate } from './types/config'

dotenv.config();

const config = <IConfig>{}

// Express
config.express = { port : 3000 }

// App
config.app = {
    baseURL : 'http://yourdomain.com' // Base URL
}

// JWT
config.jwt = { secret : process.env.TOKEN_SECRET || 'nosecrets' }

// Mongo
config.mongo = {
    username : process.env.MONGO_USER || 'username',
    password : process.env.MONGO_PASSWORD || 'password',
    host : "your.mongo.db.address", // Host Address
    db : "yourdbname", // Database Name
    opt : { useNewUrlParser: true, useUnifiedTopology: true },
    cs : ''
}
config.mongo.cs = `mongodb+srv://${config.mongo.username}:${config.mongo.password}@${config.mongo.host}/${config.mongo.db}?retryWrites=true&w=majority`;

// SMTP
config.smtp = {
    enabled : true, // Turn on/off SMTP servicess
    host : 'smtp.yourdomain.com', // SMTP Address
    secure : true, // if it's true : 465, false : 587
    port : 587,
    portSSL : 465,
    username : process.env.SMTP_USER || 'username',
    password : process.env.SMTP_PASS || 'password'
}

// Language
config.i18n = {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    cookie: 'yourcookiename',
    objectNotation: true,
    directory: __dirname + '/translations'
}

// Nodemailer
config.nodemailer = {
    transporter : {
        host: config.smtp.host,
        port:  config.smtp.secure?config.smtp.portSSL:config.smtp.port,
        secure: config.smtp.secure,
        auth: {
            user: config.smtp.username,
            pass: config.smtp.password
        }
    },
    templates : {
        verifyEmail : (userEmail:string, verificationCode:string) => {
            return <INodeMailerTemplate>{
                from: '"Your Company" noreply@yourcompany.com', // From Address
                to: userEmail,
                subject: "Your Company Email Verification", // Subject
                text: `Your verification link : ${config.app.baseURL}/verify/email?${userEmail}&code=${verificationCode}`, // Text
                html: `<p>Please click <a href="${config.app.baseURL}/verify/email?${userEmail}&code=${verificationCode}">here</a> to verify your email.</p>` // HTML
            }
        }
    }
}

export default config;