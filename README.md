# 🧠 Not To Do List (React + Vite + Node.js + MongoDB)

A responsive and beginner-friendly **Habit Tracker** web app built with **React**, **Vite**, **Node.js**, and **MongoDB**. This full-stack application allows users to manage their daily tasks and habits, visualize time allocation, and persist data using a MongoDB backend.

---

## ✨ Features

- **✅ Add New Tasks**  
  Input a task name and estimated hours to add a task to your active task list.

- **📋 Task List View**  
  See all added tasks with corresponding hours in an interactive list.

- **🚫 Entry List**  
  Move tasks you want to reduce (bad habits) into a separate "Habits to Reduce" list.

- **🔁 Task-Habit Switching**  
  Seamlessly switch tasks between the Task List and Habit List with one click.

- **⏱ Time Tracking**  
  Instantly view total hours spent on tasks and the potential time saved if habits were avoided.

- **🗑 Task Deletion**  
  Remove tasks from either list with confirmation to avoid accidental deletions.

- **📡 Backend Integration**  
  All task data is saved and retrieved from a **MongoDB** database using a **Node.js + Express** backend and **Axios** for HTTP communication.

- **💡 Responsive UI**  
  Mobile and desktop-friendly layout powered by Bootstrap and Font Awesome.

---

## ⚙️ Tech Stack

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| React (via Vite)  | UI rendering and state management        |
| Node.js + Express | Backend server and API routes            |
| MongoDB           | Database for storing user tasks          |
| Mongoose          | ODM to interact with MongoDB             |
| Axios             | Frontend HTTP client for API calls       |
| HTML & CSS        | Markup and styling                       |
| Bootstrap         | Responsive layout and components         |
| JavaScript (ES6+) | Application logic                        |
| Font Awesome      | Iconography                              |
| Yarn              | Dependency management                    |

---

## 🚀 Getting Started

### 🔄 Clone the Repository

```bash
git clone https://github.com/roshanpaudel/react-not-to-do-list
cd react-not-to-do-list
```

---

### 📦 Install Dependencies

#### Frontend

```bash
cd client
yarn install
```

#### Backend

```bash
cd ../server
yarn install
```

---

### ⚙️ Set Up Environment Variables

Create a `.env` file inside the `server/` folder with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### ▶️ Start the Application

#### Start Backend Server

```bash
cd server
yarn start
```

#### Start Frontend Dev Server

In a separate terminal:

```bash
cd client
yarn dev
```

Open your browser at:

📍 `http://localhost:5173/`

---

## 🏗 Project Structure

```
react-not-to-do-list/
├── client/                      # Frontend (React + Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Table.jsx
│   │   │   ├── UserInput.jsx
│   │   │   └── HoursBanner.jsx
│   │   └── api/
│   │       └── taskApi.js       # Axios calls to backend
│   └── index.html
│   └── vite.config.js
│
├── server/                      # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   │   └── TaskModel.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── server.js
│   └── .env
│
├── package.json                 # Root-level metadata
└── README.md
```

---

## 📚 How to Use the App

### ➕ Add a Task

- Enter task name in the **"Task"** input field.
- Enter estimated hours in the **"Hours"** field.
- Click **"Add new task"** to add it to the task list.

### 📋 View Entry List

- All tasks appear under **"Entry List"**, showing the task name and hours.

### ➡️ Move to Habits

- Click the **right arrow icon (➡️)** beside a task to move it to the **"Habits to Reduce"** list.

### ⬅️ Move Back to Task List

- Click the **left arrow icon (⬅️)** in the Habits list to move the task back to the Task list.

### 🗑 Delete a Task

- Click the **trash icon** to remove a task from either list.
- Confirm the prompt to finalize the deletion.

### ⏱ Track Hours

- **"Total Allocated Time"** shows the sum of all task hours.
- **"You Could Have Saved"** shows the sum of all habit hours.

---

## 🧠 Backend API Overview

| Endpoint           | Method | Description                       |
| ------------------|--------|-----------------------------------|
| `/api/tasks`       | GET    | Fetch all tasks                   |
| `/api/tasks`       | POST   | Add a new task                    |
| `/api/tasks/:id`   | PATCH  | Update task (e.g., switch lists)  |
| `/api/tasks/:id`   | DELETE | Delete a task                     |

---

## 🎨 Styling & Design

- **Bootstrap** is used for layout and responsive design.
- **Font Awesome** provides clean, lightweight icons.
- **Custom CSS** enhances specific components and layouts.

---

## 📦 Scripts (via Yarn)

| Command        | Action                          |
| -------------- | ------------------------------- |
| `yarn dev`     | Run the app in development mode |
| `yarn build`   | Build the app for production    |
| `yarn preview` | Preview the production build    |

---

## 🌐 Deployment Tips

To deploy this app:

### Frontend (Client)

1. Build using `yarn build`
2. Deploy the `client/dist/` folder on Netlify, Vercel, or GitHub Pages

### Backend (Server)

- Deploy the backend (Node.js server) using:
  - [Render](https://render.com/)
  - [Railway](https://railway.app/)
  - [Fly.io](https://fly.io/)
  - [Heroku (if still available)](https://www.heroku.com)

Make sure to:
- Add your MongoDB URI and set the CORS origin for frontend
- Configure environment variables properly

---

## 📄 License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute it.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Axios](https://axios-http.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)

---

> ✨ _Made with React, Node.js, and a little bit of discipline. Happy habit tracking!_
