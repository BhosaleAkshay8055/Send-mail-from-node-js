const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the form submission
app.post('/send-email', upload.single('attachment'), (req, res) => {
  const { to, subject, text } = req.body;

    //   // Create a transporter using SMTP
    //   const transporter = nodemailer.createTransport({
    //     service: 'smtp.gmail.com',
    //     auth: {
    //       user: 'bhosale71096@gmail.com',  // Replace with your email address
    //       pass: 'tbxe xzld slre ezcb'          // Replace with your email password
    //     }
    //   });

  // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',  // Update with your SMTP host
        port: 587,
        secure: false,  // Set to true if using SSL/TLS
        auth: {
        user: 'bhosale71096@gmail.com',  // Replace with your email address
        pass: 'tbxe xzld slre ezcb'          // Replace with your email password or app password
        }
  });

  // Define email options
  const mailOptions = {
    from: 'bhosale71096@gmail.com',
    to: to,
    subject: subject,
    text: text,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer
      }
    ]
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
