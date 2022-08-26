import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const NODE_EMAIL = process.env.NODE_EMAIL;
const NODE_PASSWORD = process.env.NODE_PASSWORD;

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "dirkkelderman@gmail.com",
      pass: "elxa jmrr jdyp dhhx",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "dirkkelderman@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
