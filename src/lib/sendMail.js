import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const sendResetPasswordEmail = async (email, token) => {
    const resetLink = `http://localhost:3000/newPassword?token=${token}`

    const htmlContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1 style="color: #333;">Password Reset</h1>
            <p>We received a request to reset your password.</p>
            <p>
                Click the link below to reset your password:
            </p>
            <p>
                <a
                href="${resetLink}"
                style="
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                "
                >
                Reset Password
                </a>
            </p>
            <p>If you didn't request a password reset, please ignore this email.</p>
            <p>Thank you!</p>
            <p>Firas Dev</p>
            </div>
        `;


    let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Reset your password',
        html: htmlContent,
    }

    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Error sending email: ", err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

}

export default sendResetPasswordEmail;