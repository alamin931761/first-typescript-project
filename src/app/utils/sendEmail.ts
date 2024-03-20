import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.node_env === 'production',
    auth: {
      user: 'alamin931761@gmail.com',
      pass: 'hdct ealp omjd mkqq',
    },
  });

  await transporter.sendMail({
    from: 'alamin931761@gmail.com',
    to,
    subject: 'Reset your password within 10 minutes!',
    text: '',
    html,
  });
};
