import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'ecepaniq@gmail.com',
        pass: 'pasha123321P',
      },
    });
    const mailOptions = {
      from: '"TimeTeat" <ecepaniq@gmail.com>',
      to: email,
      subject: 'Welcome to Our Service',
      text: 'Thank you for registering!',
      html: '<b>Thank you for registering!</b>',
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
