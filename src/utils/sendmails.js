const nodemailer = require("nodemailer");


//-----------------------------------------------------------------------------
export async function sendMail(name,subject, toEmail,confirmationCode) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    // text: otpText,
  
    html: `<h1>Email Confirmation</h1>
    <h2>Hello ${name}</h2>
    <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
    <a href=${process.env.NEXT_PUBLIC_WEBSITE}/confirm/${confirmationCode}> Click here</a>
    </div>`
  
  };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       throw new Error(error);
//     } else {
//       console.log("Email Sent");
//       return true;
//     }
//   });


await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });




}