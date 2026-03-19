# Interview AI 🤖

**Interview AI** is a professional-grade, full-stack mock interview platform. It utilizes a React-based frontend and a modular Node.js backend to provide a seamless environment for technical interview preparation, featuring AI-powered question generation, real-time feedback, and persistent progress tracking.

---

## ✨ Features

* **🔐 Secure Authentication:** Robust user lifecycle (Register/Login) with JWT-protected endpoints and persistent sessions.
* **🧠 AI Mock Interviewer:** Sophisticated interview logic that generates dynamic questions and evaluates user responses for technical accuracy.
* **📊 Detailed Reporting:** After every session, users receive a comprehensive performance report and scoring.
* **⚡ Performance-First UI:** Built using Vite and React for near-instant load times and a fluid, responsive user experience.
* **🛡️ Scalable Architecture:** A strictly organized folder structure following industry-standard design patterns.

---

## 📂 Project Structure

The project is divided into two main directories for clear separation of concerns:

### 🏠 Root

The root directory contains the general configuration and manages the two core modules.

### 🖥️ Backend (`/Backend`)

A structured Node.js/Express environment:

* **`src/config/`**: Database connection and environmental configurations.
* **`src/controllers/`**: Orchestrates logic between the routes and services.
* **`src/middlewares/`**: JWT validation and custom error handling.
* **`src/models/`**: Mongoose schemas for Users and Interviews.
* **`src/routes/`**: API endpoint definitions.
* **`src/services/`**: Core logic for AI integration (OpenAI/LLM).
* **`app.js` & `server.js**`: Application setup and server entry point.

### 🎨 Frontend (`/Frontend`)

A modern React application powered by Vite:

* **`src/`**: Contains the modular feature folders (Auth, Interview) and reusable UI components.
* **`vite.config.js`**: Optimized build configurations.
* **`eslint.config.js`**: Enforced code quality standards.

---

## 🚀 Setup & Installation

### 1. Backend Setup

```bash
cd Backend
npm install

```

Create a `.env` file in the `Backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_string
GOOGLE_GEMINI_API_KEY=your_GEMINI_key

```

Start the server:

```bash
npm run dev

```

### 2. Frontend Setup

```bash
cd Frontend
npm install
npm run dev

```

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | React, Vite, TailwindCSS / SASS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **AI** | Gemini API (Gemini Models) |
| **Auth** | JSON Web Tokens (JWT) |

---

## 👤 Author

**Ankit kumar**

* **GitHub:** [@Ordinary-Boy20](https://github.com/Ordinary-Boy20)
