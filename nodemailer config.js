//*************************************************************************************** */

//                    Node Mailer-- Sending mails
//*************************************************************************************** */



// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'negikcz7bmpyucwc@ethereal.email',
            pass: 'J4ABuK8Nkp1HpbWjGg'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nadeem Khan 👻" <khan.nadim58@gmail.com>', // sender address
        to: 'khan.nadeem5811@gmail.com', // list of receivers
        subject: 'Node mailer Testing 👻', // Subject line
        text: 'Its a Success ?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        //Message sent: <09c6446d-4044-2dd9-3013-d95daed5fb6a@ethereal.email>
        //Preview URL: https://ethereal.email/message/W0PQiBVUhwyoiudcW0PRbavoFgz2itj6AAAAAYl1sNqSMAqsZVv1b9q6Z18
    });
});
