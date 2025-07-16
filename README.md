# 🧠 Not To Do List (React + Vite)

A responsive and beginner-friendly **Habit Tracker** web app built with **React** and **Vite**. This application allows users to manage their daily tasks and habits, helping them visualize how they allocate their time and where they can make improvements.

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

- **💡 Responsive UI**  
  Mobile and desktop-friendly layout powered by Bootstrap and Font Awesome.

---

## ⚙️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React (via Vite)  | UI rendering and state management |
| HTML & CSS        | Markup and styling                |
| Bootstrap         | Responsive layout and components  |
| JavaScript (ES6+) | Application logic                 |
| Font Awesome      | Iconography                       |
| Yarn              | Dependency management             |

---

## 🚀 Getting Started

### 🔄 Clone the Repository

```bash
git clone https://github.com/roshanpaudel/react-not-to-do-list
cd not-to-do-list
📦 Install Dependencies
Make sure you have Yarn installed.


yarn install
▶️ Start the Development Server

yarn dev
Then open your browser at:
📍 http://localhost:5173/

🔧 Project Structure

not-to-do-list/
├── public/                   # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/               # Reusable React components (TaskList, HabitList, Form, etc.)
│   ├── App.jsx               # Main application component
│   ├── HoursBanner.jsx       # Banner card component
│   ├── main.jsx              # Entry point for React via Vite
│   ├── Table.jsx             # Table to display habits component
│   └── UserInput.jsx         #User input component
│
├── index.html                # Base HTML template
├── package.json              # Project metadata and scripts
├── vite.config.js            # Vite configuration
└── README.md
```

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

To deploy this app (e.g., on **Netlify**, **Vercel**, or **GitHub Pages**):

1. Run `yarn build`
2. Upload the `dist/` folder to your chosen hosting service

Or use **Vercel CLI** / **Netlify CLI** for continuous deployment.

---

## 📄 License

This project is open source under the **MIT License**.  
You are free to use, modify, and distribute it.

---

## 🙏 Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

---

> ✨ _Made with React and a little bit of discipline. Happy habit tracking!_
