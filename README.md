🧾 Fullstack Registration Form

A Full Stack Web Application that allows users to register with their name, email, and password.
This project demonstrates how to connect a React frontend with a Django REST Framework backend to build a complete user registration system.

🚀 Features

User registration with name, email, and password

Validation for duplicate emails

API integration between frontend and backend

REST API built using Django REST Framework (DRF)

CORS enabled for secure frontend-backend communication

SQLite database for local development

🧩 Tech Stack
Layer	Technology
Frontend	React.js (with Axios, Fetch API)
Backend	Django & Django REST Framework
Database	SQLite
Styling	CSS / Bootstrap
Communication	JSON-based REST API
⚙️ Project Structure
fullstack_project/
│
├── backend/                   # Django backend
│   ├── core/                  # Main Django project
│   ├── api/                   # App containing models, views, and urls
│   ├── db.sqlite3             # Database
│   └── manage.py
│
├── frontend/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── RegisterForm.js
│   │   └── App.js
│   └── package.json
│
└── README.md
