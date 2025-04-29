# 📝 Task Management App

A full-stack web application to manage your daily tasks efficiently.  
Built with modern technologies on both the frontend and backend.

---

## 🚀 Features

- ✅ User Authentication (Register/Login/Logout)
- ✅ Create, Read, Update, and Delete (CRUD) tasks
- ✅ Mark tasks as **Completed** or **Pending**
- ✅ Filter tasks based on status
- ✅ Responsive design for all devices
- ✅ Secure APIs with proper validation
- ✅ Real-time updates (optional if implemented)

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- Redux / Context API (for state management)
- Tailwind CSS / Chakra UI / Custom CSS
- Axios (for API calls)

**Backend**:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- bcrypt.js (for password hashing)

**Other Tools**:
- Postman (for API testing)
- Vercel / Netlify (Frontend Deployment)
- Render / Railway / AWS (Backend Deployment)
- Git & GitHub (Version Control)

---

## 📂 Folder Structure


---

## 📦 Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```
### 2. Setup the Backend
```
cd server
npm install
npm run dev
```
Backend will run on http://localhost:8080

### 3. Setup the Frontend
``` 
cd client
npm install
npm run start
```
Frontend will run on http://localhost:5173

### 🔒 Environment Variables
Create a .env file in the /server directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 📚 API Endpoints Overview

| Method | Endpoint          | Description              |
|:------:|:------------------|:--------------------------|
| POST   | `/user/register` | Register a new user      |
| POST   | `/user/login`    | Login user               |
| GET    | `/tasks`         | Get all tasks            |
| POST   | `/tasks`         | Create a new task        |
| PATCH  | `/tasks/:id`     | Update an existing task  |
| DELETE | `/tasks/:id`     | Delete a task            |



