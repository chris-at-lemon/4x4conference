import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "cherrmann@lemon-digital.com", // Your email where you'll receive emails
      from: "info@thematicsontour.com", // your website email address here
      subject: "some more testing sendgrid google verif",
      html: `<div>You've got a mail from sendgrid</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
