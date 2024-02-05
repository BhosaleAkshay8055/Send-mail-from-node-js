# Send-mail-from-node-js
Send mail with the file attached from node js app


# Job Application Form with Email Submission

This project is a simple job application form that allows users to submit their details along with a resume (PDF format). The server is built with Node.js and Express, and it uses Nodemailer to send the job application details to a specified email address.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)

## Features

- Job application form with fields for personal details
- File upload functionality for submitting resumes
- Server-side handling of form submissions using Express
- Email notification to the specified address with application details and attached resume

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/BhosaleAkshay8055/Send-mail-from-node-js.git
   npm i
   node index.js
   ```


## Usage
1. Fill out the job application form with your details.
2. Attach your resume (PDF format).
3. Submit the form.
4. Check the console for server logs.
5. If successful, you will receive an email confirmation.

## Configuration
1. SMTP Configuration:
  a. Open server.js.
  b. Update the SMTP host, port, secure status, and authentication credentials in the createTransport method.
2. Email Recipient:
  a. Update the to field in the mailOptions object with the desired recipient email address.


