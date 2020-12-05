interface IConfig {
    express : {
        port : number
    }
    app : {
        baseURL : string
    }
    jwt : {
        secret : string
    }
    mongo : {
        username : string
        password : string
        host : string
        db : string
        opt : object
        cs : string
    }
    smtp: {
        enabled: boolean,
        host : string
        secure : boolean
        port : number
        portSSL : number,
        username : string
        password : string
    }
    i18n : {
        locales: string[],
        defaultLocale: string,
        cookie: string,
        objectNotation : boolean,
        directory: string
    }
    nodemailer : {
        transporter : {
            host : string
            port : number
            secure : boolean
            auth : {
                user : string
                pass : string
            }
        }
        templates : {
            verifyEmail(userEmail:string, verificationCode:string) : INodeMailerTemplate
        }
    }
}

interface INodeMailerTemplate {
    from : string
    to : string
    subject : string
    text : string
    html : string
}

export { IConfig, INodeMailerTemplate }