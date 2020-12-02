import nodemailer from 'nodemailer'
import config from '../config'

const smtpActivation = async (userEmail:string, activationCode:string) => {
  const transporter = nodemailer.createTransport(config.nodemailer.transporter);
  const message = config.nodemailer.templates.activation(userEmail, activationCode);
  const info = await transporter.sendMail(message);
  return `Message sent: ${info.messageId}`
}

export default smtpActivation