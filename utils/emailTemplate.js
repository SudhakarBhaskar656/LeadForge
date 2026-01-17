/* ================= USER EMAIL TEMPLATE ================= */
exports.userEmailTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Thanks for contacting LeadForge</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:30px;">
        <table width="600" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td style="background:#0b1b3a;padding:20px;text-align:center;">
              <h2 style="color:#ffffff;margin:0;">LeadForge</h2>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p>Hi <strong>${name}</strong>,</p>

              <p>
                Thank you for contacting <strong>LeadForge</strong>.
              </p>

              <p>
                We have received your request and our team will get back to you
                within <strong>48 hours</strong>.
              </p>

              <p>
                If you have any urgent questions, feel free to reply to this email.
              </p>

              <p style="margin-top:30px;">
                Regards,<br />
                <strong>LeadForge Team</strong>
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f0f2f7;padding:14px;text-align:center;font-size:12px;color:#777;">
              © ${new Date().getFullYear()} LeadForge. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

/* ================= ADMIN EMAIL TEMPLATE ================= */
exports.adminEmailTemplate = (contact) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Contact Lead</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:30px;">
        <table width="600" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td style="background:#1f7aff;padding:20px;text-align:center;">
              <h2 style="color:#ffffff;margin:0;">New Contact Submission</h2>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:30px;color:#333;">
              <p><strong>Name:</strong> ${contact.name}</p>
              <p><strong>Email:</strong> ${contact.email}</p>
              <p><strong>Phone:</strong> ${contact.phone}</p>
              <p><strong>Company:</strong> ${contact.company}</p>
              <p><strong>Service:</strong> ${contact.service}</p>
              <p><strong>Message:</strong><br />${contact.message}</p>

              <p style="margin-top:20px;font-size:12px;color:#777;">
                Submitted on ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;   
