
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/aboutme', (req, res) => {
  res.render('aboutme');

});
app.get('/contact', (req, res) => {
  res.render('contact');

});
app.post('/send', (req, res) => {
   if(req.body.name==""||req.body.email==""||req.body.message=="") {
      return console.log("Please fill all fields");}
      else {


  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'eddmailer400@gmail.com', // generated ethereal user
        pass: 'nodemailer'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <eddmailer400@gmail.com>', // sender address
      to: 'jainaditya400@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error ) {
          return console.log(error);
      }


      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
}});

app.listen(process.env.PORT, () => console.log('Server started...'));
