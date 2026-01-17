const Contact = require("../models/contact.model");
const { sendEmailsAsync } = require("../utils/emailService");

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[0-9]{10,15}$/.test(phone);

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!name || !email || !phone || !company || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }

    //  DUPLICATE CHECK
    const existing = await Contact.findOne({
      $or: [{ email }, { phone }],
    });

    if (existing) {
      return res.status(200).json({
        success: true,
        message: "We will contact you shortly",
      });
    }

    // SAVE CONTACT (IMPORTANT PART)
    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });

    //  SEND EMAILS
    sendEmailsAsync(contact);

    return res.status(201).json({
      success: true,
      message: "Thank you! We will contact you shortly",
    });

  } catch (error) {
    console.error("Contact controller error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
