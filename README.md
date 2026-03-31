# 🔐 Password Reset Flow – Frontend

## 🚀 Live Demo

👉 https://password-reset-1.netlify.app/

---

## 📌 Overview

This is the frontend of a Password Reset Flow web application.
It allows users to request a password reset and update their password using a secure token-based system.

---

## ✨ Features

* 🔑 Login UI
* 📧 Forgot Password functionality
* 🔄 Reset Password using token
* 📱 Fully responsive design
* ⚡ Fast and simple UI using Bootstrap
* 🔗 Connected to backend API

---

## 🛠️ Tech Stack

* React.js
* React Router DOM
* Axios
* Bootstrap

---

## 📂 Project Structure

```
src/
├── index.js
├── App.js
├── styles.css
└── pages/
    ├── Login.jsx
    ├── ForgotPassword.jsx
    └── ResetPassword.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/password-reset-frontend.git
```

### 2️⃣ Navigate to project folder

```
cd password-reset-frontend
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the application

```
npm start
```

---

## 🌐 API Configuration

Make sure your backend is running at:

```
http://localhost:5000
```

Update API URLs in the following files:

* `src/pages/ForgotPassword.jsx`
* `src/pages/ResetPassword.jsx`

Example:

```js
http://localhost:5000/api/auth/forgot-password
http://localhost:5000/api/auth/reset-password/:token
```

---

## 🔄 Application Flow

1. User opens Login page
2. Clicks on **Forgot Password**
3. Enters registered email
4. Backend generates reset token
5. User opens reset link
6. Enters new password
7. Password is updated successfully

---

## 🧪 Testing

* Enter a registered email in Forgot Password page
* Use the reset link returned from backend
* Open link in browser
* Set new password

---