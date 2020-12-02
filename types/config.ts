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
            activation(userEmail:string, activationCode:string) : INodeMailerTemplate
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