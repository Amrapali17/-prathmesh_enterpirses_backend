
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

const PORT = process.env.PORT || 5000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Escape HTML characters for safe email formatting
const escapeHtml = (value) => {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// Format project details
const formatProjectDetails = (details = {}) => {
  return Object.entries(details).map(([key, value]) => {
    const label = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, str => str.toUpperCase());

    const formattedValue =
      value === null || value === undefined || value === ""
        ? "Not provided"
        : String(value);

    return {
      label,
      value: formattedValue
    };
  });
};

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Prathamesh Enterprises API is running!"
  });
});

// Submit contact, enquiry or quotation
app.post("/api/inquiries", async (req, res) => {
  try {
    const data = req.body;

    const allowedTypes = ["contact", "enquiry", "quotation"];

    if (
      !data.submission_type ||
      !allowedTypes.includes(data.submission_type) ||
      !data.full_name?.trim() ||
      !data.email?.trim() ||
      !data.phone?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid required details."
      });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.BUSINESS_EMAIL
    ) {
      console.error("Missing Resend or business email configuration.");

      return res.status(500).json({
        success: false,
        message: "Server email configuration is incomplete."
      });
    }

    const details =
      data.project_details &&
      typeof data.project_details === "object" &&
      !Array.isArray(data.project_details)
        ? data.project_details
        : {};

    // 1. Save submission in Supabase
    const { error } = await supabase
      .from("inquiries")
      .insert([{
        submission_type: data.submission_type,
        full_name: data.full_name.trim(),
        company_name: data.company_name || null,
        email: data.email.trim(),
        phone: data.phone.trim(),
        service: data.service || null,
        project_details: details
      }]);

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        success: false,
        message: "Could not save your submission. Please try again."
      });
    }

    // 2. Format project details
    const formattedDetails = formatProjectDetails(details);

    const projectDetailsText = formattedDetails.length
      ? formattedDetails
          .map(item => `${item.label}: ${item.value}`)
          .join("\n")
      : "No additional details provided.";

    // 3. Prepare plain-text email
    const emailText = `
NEW ${data.submission_type.toUpperCase()} RECEIVED

CUSTOMER DETAILS

Name: ${data.full_name}
Company: ${data.company_name || "Not provided"}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service || "Not provided"}

MESSAGE / PROJECT DETAILS

${projectDetailsText}

--------------------------------
Prathamesh Enterprises
Website Enquiry Notification
`;

    // 4. Prepare professional HTML email
    const detailsHtml = formattedDetails.length
      ? formattedDetails.map(item => `
          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d; margin-bottom: 4px;">
              ${escapeHtml(item.label)}
            </div>
            <div style="font-size: 14px; color: #263442;">
              ${escapeHtml(item.value)}
            </div>
          </div>
        `).join("")
      : `<p style="color: #697681;">No additional details provided.</p>`;

    const emailHtml = `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        color: #263442;
        line-height: 1.6;
        background: #ffffff;
      ">

        <div style="
          background: #172532;
          padding: 28px 30px;
          color: #ffffff;
        ">
          <h2 style="margin: 0; font-size: 23px;">
            Prathamesh Enterprises
          </h2>

          <p style="
            margin: 7px 0 0;
            color: #f28b45;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            New ${escapeHtml(data.submission_type)} received
          </p>
        </div>

        <div style="
          padding: 28px 30px;
          border: 1px solid #e5e9ec;
        ">

          <h3 style="
            margin: 0 0 20px;
            color: #172532;
            font-size: 18px;
          ">
            Customer Details
          </h3>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d;">Name</div>
            <div style="font-size: 14px;">${escapeHtml(data.full_name)}</div>
          </div>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d;">Company</div>
            <div style="font-size: 14px;">${escapeHtml(data.company_name || "Not provided")}</div>
          </div>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d;">Email</div>
            <div style="font-size: 14px;">
              <a href="mailto:${escapeHtml(data.email)}" style="color: #df702d;">
                ${escapeHtml(data.email)}
              </a>
            </div>
          </div>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d;">Phone</div>
            <div style="font-size: 14px;">${escapeHtml(data.phone)}</div>
          </div>

          <div style="margin-bottom: 14px;">
            <div style="font-size: 12px; color: #77838d;">Service</div>
            <div style="font-size: 14px;">${escapeHtml(data.service || "Not provided")}</div>
          </div>

          <hr style="
            border: 0;
            border-top: 1px solid #e5e9ec;
            margin: 25px 0;
          ">

          <h3 style="
            margin: 0 0 20px;
            color: #172532;
            font-size: 18px;
          ">
            Message / Project Details
          </h3>

          ${detailsHtml}

        </div>

        <div style="
          background: #f3f5f6;
          padding: 18px 30px;
          color: #77838d;
          font-size: 12px;
          text-align: center;
        ">
          This notification was generated from the
          Prathamesh Enterprises website.
        </div>

      </div>
    `;

    // 5. Send email notification using Resend
    try {
      const resendResponse = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "Prathamesh Enterprises <website@prathameshenterprises.co.in>",
            to: [process.env.BUSINESS_EMAIL],
            reply_to: data.email.trim(),
            subject: `New ${data.submission_type} - Prathamesh Enterprises`,
            text: emailText,
            html: emailHtml
          })
        }
      );

      const resendResult = await resendResponse.json();

      if (!resendResponse.ok) {
        throw new Error(
          resendResult.message || "Resend email delivery failed."
        );
      }

      console.log("Resend email accepted:", resendResult.id);

      return res.json({
        success: true,
        emailSent: true,
        message: "Your submission has been received successfully!"
      });

    } catch (emailError) {
      console.error("Resend email error:", emailError);

      return res.status(200).json({
        success: true,
        emailSent: false,
        message: "Your submission was saved, but email notification could not be sent."
      });
    }

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
