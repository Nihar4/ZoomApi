import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text, html) => {
    const transporter = createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "abdelaaziz.belharcha@gmail.com",
            pass: "vhxs ebnf zxeu wmbi",
        },
    });
    await transporter.sendMail({
        to,
        subject,
        text,
        html
    });
};
