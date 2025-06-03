# MERN Auth App

A simple authentication app built using the **MERN stack** (MongoDB, Express, React, Node.js). Includes user registration, login, logout, email verification via OTP, and password reset features.

---

## 🔐 Features

- User registration with welcome email
- Email verification using OTP
- Login and logout
- Forgot password with OTP and reset
- Protected routes
- Clean and responsive UI (React + TailwindCSS)

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Email**: Nodemailer with custom HTML templates

---

## 📁 Project Structure

```

/client    -> React frontend
/server    -> Node + Express backend

````

---

## ⚙️ Environment Variables

### 📄 `/client/.env`
```env
VITE_BACKEND_URL=http://localhost:4000
````

### 📄 `/server/.env`

```env
MONGODB_URL=mongodb://localhost:27017
PORT=4000

JWT_SECRET=secret#text
NODE_ENV=development

SMTP_USER=8a74b4002@smtp-brevo.com
SMTP_PASS=DnsE3GkCtzIPU64d
SENDER_EMAIL=sender_email
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SapunAnuranga/mern-auth.git
```

### 2. Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 3. Add `.env` files

Create `.env` in both `/server` and `/client` with the values shown above.

### 4. Run the development servers

```bash
# In two terminals

# Terminal 1: Start backend
cd server
npm run dev

# Terminal 2: Start frontend
cd client
npm start
```

---

## ✉️ Email Templates

* Welcome email on registration
* OTP for email verification
* OTP for password reset

---

## 📌 Endpoints Overview (Backend)

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login user
* `POST /api/auth/logout` – Logout user
* `POST /api/auth/send-verify-otp` – Send OTP to verify email
* `POST /api/auth/verify-email` – Verify user email
* `POST /api/auth/send-reset-otp` – Send OTP for password reset
* `POST /api/auth/reset-password` – Reset password
* `POST /api/user/getUserData` – Get user details

---

## 🧑‍💻 Author

Made with by [Sapun Anuranga](https://github.com/SapunAnuranga)
