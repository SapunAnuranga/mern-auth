export const WELCOME_EMAIL_TEMPLATE = (name, email) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
    <div style="max-width: 500px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="color: #333;">Welcome to Our Service!</h2>
      <p style="font-size: 15px; color: #555;">Hi ${name},</p>
      <p style="font-size: 15px; color: #555;">
        We're excited to have you on board. Your registered email is:
        <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>.
      </p>
      <p style="font-size: 15px; color: #555;">
        If you have any questions or need assistance, feel free to reach out to our support team.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Welcome" width="100" style="border-radius: 50%;" />
      </div>
      <p style="font-size: 13px; color: #999;">
        We're glad you're here. Let's get started!
      </p>
    </div>
  </div>
`;

export const EMAIL_VERIFY_TEMPLATE = (name, email, otp) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
    <div style="max-width: 500px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="color: #333;">Verify your email address</h2>
      <p style="font-size: 15px; color: #555;">Hi ${name},</p>
      <p style="font-size: 15px; color: #555;">
        Thanks for registering with the email:
        <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>.
      </p>
      <p style="font-size: 15px; color: #555;">Please use the OTP below to verify your account:</p>
      <div style="text-align: center; margin: 20px 0;">
        <div style="display: inline-block; background-color: #28a745; color: white; font-size: 20px; padding: 15px 30px; border-radius: 6px; letter-spacing: 2px;">
          ${otp}
        </div>
      </div>
      <p style="font-size: 13px; color: #999;">
        This OTP is valid for the next <strong>24 hours</strong>. If you did not request this, please ignore this email.
      </p>
    </div>
  </div>
`;


export const RESET_PASSWORD_TEMPLATE = (name, email, otp) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
    <div style="max-width: 500px; margin: auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="color: #333;">Forgot your password?</h2>
      <p style="font-size: 15px; color: #555;">Hi ${name},</p>
      <p style="font-size: 15px; color: #555;">
        We received a password reset request for your account:
        <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>.
      </p>
      <p style="font-size: 15px; color: #555;">Use the OTP below to reset your password:</p>
      <div style="text-align: center; margin: 20px 0;">
        <div style="display: inline-block; background-color: #28a745; color: white; font-size: 20px; padding: 15px 30px; border-radius: 6px; letter-spacing: 2px;">
          ${otp}
        </div>
      </div>
      <p style="font-size: 13px; color: #999;">
        This OTP is valid for the next <strong>15 minutes</strong>. If you did not request this, please ignore this email.
      </p>
    </div>
  </div>
`;
