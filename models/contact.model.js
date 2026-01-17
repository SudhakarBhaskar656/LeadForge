const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    service: {
      type: String,
      required: true,
      enum: [
        "social-media-ads",
        "google-ads",
        "website-development",
        "app-development",
        "seo-services",
        "email-sms-automation",
        "multiple",
      ],
    },

    message: {
      type: String,
      required: false,
      trim: true,
    
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
