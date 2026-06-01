# 🚀 User Authentication Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-5.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![License](https://img.shields.io/badge/License-ISC-yellow)

A simple and scalable backend authentication system built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

This project demonstrates the fundamentals of backend development including:

- REST API Development
- User Registration
- User Login
- Password Hashing with Bcrypt
- MongoDB Integration
- MVC Architecture
- Environment Configuration

---

# 📌 Features

✅ User Registration

✅ User Login

✅ Password Encryption using Bcrypt

✅ MongoDB Database Connectivity

✅ Express REST APIs

✅ MVC Project Structure

✅ Environment Variable Configuration

✅ Error Handling

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| Bcrypt | Password Hashing |
| Dotenv | Environment Variables |
| Nodemon | Development Server |

---

# 📂 Project Structure

```text
Backend
│
├── package.json
│
└── Backend
    │
    ├── src
    │
    ├── app.js
    ├── index.js
    │
    ├── config
    │   ├── database.js
    │   └── constants.js
    │
    ├── controllers
    │   └── user.controller.js
    │
    ├── models
    │   └── user.model.js
    │
    └── routes
        └── user.route.js
```

---

# 🏗️ Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ▼
MongoDB
```

---

# 🗄️ Database Schema

## User

```javascript
{
    username: String,
    email: String,
    password: String
}
```

### Fields

| Field | Type | Description |
|---------|------|-------------|
| username | String | Unique username |
| email | String | User email |
| password | String | Hashed password |

---

# 🔄 Request Flow

### Register User

```text
POST /api/v1/users/register
        │
        ▼
Validate Input
        │
        ▼
Check Existing User
        │
        ▼
Hash Password
        │
        ▼
Save User
        │
        ▼
Return Response
```

---

### Login User

```text
POST /api/v1/users/login
        │
        ▼
Find User
        │
        ▼
Compare Password
        │
        ▼
Login Success
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/AyushSingh172003/Backend.git
```

## 2. Navigate to Project

```bash
cd Backend
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Create Environment File

Create a `.env` file in the root directory.

```env
PORT=8000

MONGODB_URI=mongodb://localhost:27017/backend
```

---

## 5. Start Development Server

```bash
npm run dev
```

---

## 6. Start Production Server

```bash
npm start
```

---

# 🌐 API Endpoints

## Register User

### POST

```http
/api/v1/users/register
```

### Request Body

```json
{
  "username": "ayush",
  "email": "ayush@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User registered",
  "user": {
    "id": "123",
    "email": "ayush@example.com",
    "username": "ayush"
  }
}
```

---

## Login User

### POST

```http
/api/v1/users/login
```

### Request Body

```json
{
  "email": "ayush@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User logged in",
  "user": {
    "id": "123",
    "email": "ayush@example.com",
    "username": "ayush"
  }
}
```

---

# 🔐 Security Features

- Password hashing using Bcrypt
- Input validation
- Unique username enforcement
- Unique email enforcement
- Environment variable protection

---

# 🚧 Future Improvements

- JWT Authentication
- Access Tokens
- Refresh Tokens
- Authentication Middleware
- Role-Based Access Control (RBAC)
- Forgot Password
- Email Verification
- Swagger API Documentation
- Docker Support
- Unit Testing

---

# 🧪 Testing APIs

You can test the APIs using:

- Postman
- Thunder Client
- Insomnia

---

# 👨‍💻 Author

**Ayush Singh**

Backend Developer | Java | Spring Boot | Node.js | MongoDB

GitHub:
https://github.com/AyushSingh172003

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠️ Contribute to improvements

---

# 📜 License

This project is licensed under the ISC License.
