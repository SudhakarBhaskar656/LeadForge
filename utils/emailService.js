const nodemailer = require("nodemailer");
const {
  userEmailTemplate,
  adminEmailTemplate,
} = require("./emailTemplate");

/**
 * ===============================
 * SMTP TRANSPORTER (GMAIL)
 * ===============================
 * REQUIREMENTS:
 * - Gmail account
 * - 2-Step Verification enabled
 * - App Password (16 characters)
 */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // gmail app password
  },
});

/**
 * ===============================
 * VERIFY SMTP CONNECTION (OPTIONAL)
 * ===============================
 * Call once on server start to ensure SMTP is ready
 */
const verifyEmailService = async () => {
  try {
    await transporter.verify();
    console.log("✅ Email service is ready");
  } catch (error) {
    console.error("❌ Email service verification failed:", error.message);
  }
};

/**
 * ===============================
 * SEND USER CONFIRMATION EMAIL
 * ===============================
 */
const sendUserEmail = async (contact) => {
  await transporter.sendMail({
    from: `"LeadForge" <${process.env.EMAIL_USER}>`,
    to: contact.email,
    subject: "Thanks for contacting LeadForge",
    html: userEmailTemplate(contact.name),
  });
};

/**
 * ===============================
 * SEND ADMIN NOTIFICATION EMAIL
 * ===============================
 */
const sendAdminEmail = async (contact) => {
  await transporter.sendMail({
    from: `"LeadForge" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Lead",
    html: adminEmailTemplate(contact),
  });
};

/**
 * ===============================
 * FIRE-AND-FORGET EMAIL HANDLER
 * ===============================
 * This should NEVER block API response
 */
const sendEmailsAsync = async (contact) => {
  try {
    await Promise.all([
      sendUserEmail(contact),
      sendAdminEmail(contact),
    ]);

    console.log("✅ User & Admin emails sent");
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
  }
};

module.exports = {
  verifyEmailService,
  sendEmailsAsync,
};
